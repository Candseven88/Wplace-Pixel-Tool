export type ScaleMethod = "nearest" | "bilinear" | "lanczos";

export interface PixelizeOptions {
  pixelBlockSize: number;
  scaleMethod: ScaleMethod;
  useFloydSteinbergDithering: boolean;
  palette: Array<[number, number, number]>; // RGB triplets
  maxSourceDimension?: number; // optional cap to improve performance
}

export function hexToRgb(hex: string): [number, number, number] {
  const val = hex.startsWith("#") ? hex.slice(1) : hex;
  const n = parseInt(val, 16);
  if (val.length === 6) {
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  throw new Error("Unsupported hex color format");
}

export function createImageData(width: number, height: number): ImageData {
  return new ImageData(width, height);
}

export function resample(
  source: ImageData,
  targetWidth: number,
  targetHeight: number,
  method: ScaleMethod
): ImageData {
  if (method === "nearest") return resampleNearest(source, targetWidth, targetHeight);
  if (method === "bilinear") return resampleBilinear(source, targetWidth, targetHeight);
  return resampleLanczos(source, targetWidth, targetHeight, 3);
}

function resampleNearest(src: ImageData, tw: number, th: number): ImageData {
  const dst = new ImageData(tw, th);
  const sx = src.width / tw;
  const sy = src.height / th;
  const sdata = src.data;
  const ddata = dst.data;
  for (let y = 0; y < th; y++) {
    const syc = Math.min(src.height - 1, Math.max(0, Math.round((y + 0.5) * sy - 0.5)));
    for (let x = 0; x < tw; x++) {
      const sxc = Math.min(src.width - 1, Math.max(0, Math.round((x + 0.5) * sx - 0.5)));
      const si = (syc * src.width + sxc) * 4;
      const di = (y * tw + x) * 4;
      ddata[di] = sdata[si];
      ddata[di + 1] = sdata[si + 1];
      ddata[di + 2] = sdata[si + 2];
      ddata[di + 3] = 255;
    }
  }
  return dst;
}

function resampleBilinear(src: ImageData, tw: number, th: number): ImageData {
  const dst = new ImageData(tw, th);
  const sdata = src.data;
  const ddata = dst.data;
  const scaleX = src.width / tw;
  const scaleY = src.height / th;
  for (let y = 0; y < th; y++) {
    const sy = (y + 0.5) * scaleY - 0.5;
    const y0 = Math.max(0, Math.floor(sy));
    const y1 = Math.min(src.height - 1, y0 + 1);
    const wy = sy - y0;
    for (let x = 0; x < tw; x++) {
      const sx = (x + 0.5) * scaleX - 0.5;
      const x0 = Math.max(0, Math.floor(sx));
      const x1 = Math.min(src.width - 1, x0 + 1);
      const wx = sx - x0;

      const i00 = (y0 * src.width + x0) * 4;
      const i10 = (y0 * src.width + x1) * 4;
      const i01 = (y1 * src.width + x0) * 4;
      const i11 = (y1 * src.width + x1) * 4;

      for (let c = 0; c < 3; c++) {
        const v00 = sdata[i00 + c];
        const v10 = sdata[i10 + c];
        const v01 = sdata[i01 + c];
        const v11 = sdata[i11 + c];
        const v0 = v00 * (1 - wx) + v10 * wx;
        const v1 = v01 * (1 - wx) + v11 * wx;
        ddata[(y * tw + x) * 4 + c] = v0 * (1 - wy) + v1 * wy;
      }
      ddata[(y * tw + x) * 4 + 3] = 255;
    }
  }
  return dst;
}

function sinc(x: number): number {
  if (x === 0) return 1;
  const px = Math.PI * x;
  return Math.sin(px) / px;
}

function lanczosKernel(x: number, a: number): number {
  x = Math.abs(x);
  if (x < a) return sinc(x) * sinc(x / a);
  return 0;
}

function resampleLanczos(src: ImageData, tw: number, th: number, a = 3): ImageData {
  const dst = new ImageData(tw, th);
  const sdata = src.data;
  const ddata = dst.data;
  const scaleX = src.width / tw;
  const scaleY = src.height / th;

  for (let y = 0; y < th; y++) {
    const sy = (y + 0.5) * scaleY - 0.5;
    const yStart = Math.max(0, Math.floor(sy - a + 1));
    const yEnd = Math.min(src.height - 1, Math.floor(sy + a));
    for (let x = 0; x < tw; x++) {
      const sx = (x + 0.5) * scaleX - 0.5;
      const xStart = Math.max(0, Math.floor(sx - a + 1));
      const xEnd = Math.min(src.width - 1, Math.floor(sx + a));

      let r = 0, g = 0, b = 0;
      let totalWeight = 0;
      for (let yy = yStart; yy <= yEnd; yy++) {
        const wy = lanczosKernel(yy - sy, a);
        for (let xx = xStart; xx <= xEnd; xx++) {
          const wx = lanczosKernel(xx - sx, a);
          const w = wx * wy;
          const si = (yy * src.width + xx) * 4;
          r += sdata[si] * w;
          g += sdata[si + 1] * w;
          b += sdata[si + 2] * w;
          totalWeight += w;
        }
      }
      const di = (y * tw + x) * 4;
      if (totalWeight > 0) {
        ddata[di] = Math.max(0, Math.min(255, r / totalWeight));
        ddata[di + 1] = Math.max(0, Math.min(255, g / totalWeight));
        ddata[di + 2] = Math.max(0, Math.min(255, b / totalWeight));
      } else {
        ddata[di] = 0; ddata[di + 1] = 0; ddata[di + 2] = 0;
      }
      ddata[di + 3] = 255;
    }
  }
  return dst;
}

export function quantizeToPalette(
  img: ImageData,
  palette: Array<[number, number, number]>,
  useDither: boolean
): ImageData {
  return useDither ? ditherFloydSteinberg(img, palette) : mapToNearestPalette(img, palette);
}

function nearestPaletteIndex(r: number, g: number, b: number, palette: Array<[number, number, number]>): number {
  let bestIdx = 0;
  let bestDist = Number.POSITIVE_INFINITY;
  for (let i = 0; i < palette.length; i++) {
    const [pr, pg, pb] = palette[i];
    const dr = r - pr; const dg = g - pg; const db = b - pb;
    const d = dr * dr + dg * dg + db * db;
    if (d < bestDist) { bestDist = d; bestIdx = i; }
  }
  return bestIdx;
}

function mapToNearestPalette(img: ImageData, palette: Array<[number, number, number]>): ImageData {
  const out = new ImageData(img.width, img.height);
  for (let i = 0; i < img.data.length; i += 4) {
    const idx = nearestPaletteIndex(img.data[i], img.data[i + 1], img.data[i + 2], palette);
    const [r, g, b] = palette[idx];
    out.data[i] = r; out.data[i + 1] = g; out.data[i + 2] = b; out.data[i + 3] = 255;
  }
  return out;
}

function ditherFloydSteinberg(img: ImageData, palette: Array<[number, number, number]>): ImageData {
  const w = img.width, h = img.height;
  const out = new ImageData(w, h);
  // Work on float buffer for RGB, initialized with source values
  const buf = new Float32Array(w * h * 3);
  for (let i = 0, j = 0; i < img.data.length; i += 4, j += 3) {
    buf[j] = img.data[i];
    buf[j + 1] = img.data[i + 1];
    buf[j + 2] = img.data[i + 2];
  }

  const at = (x: number, y: number) => (y * w + x) * 3;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const bi = at(x, y);
      const r0 = buf[bi];
      const g0 = buf[bi + 1];
      const b0 = buf[bi + 2];
      const pi = nearestPaletteIndex(r0, g0, b0, palette);
      const [r1, g1, b1] = palette[pi];

      const oi = (y * w + x) * 4;
      out.data[oi] = r1; out.data[oi + 1] = g1; out.data[oi + 2] = b1; out.data[oi + 3] = 255;

      const er = r0 - r1;
      const eg = g0 - g1;
      const eb = b0 - b1;

      // Distribute error
      // (x+1, y)     += 7/16
      if (x + 1 < w) {
        const ni = at(x + 1, y);
        buf[ni] += er * 7 / 16; buf[ni + 1] += eg * 7 / 16; buf[ni + 2] += eb * 7 / 16;
      }
      // (x-1, y+1)   += 3/16
      if (x - 1 >= 0 && y + 1 < h) {
        const ni = at(x - 1, y + 1);
        buf[ni] += er * 3 / 16; buf[ni + 1] += eg * 3 / 16; buf[ni + 2] += eb * 3 / 16;
      }
      // (x, y+1)     += 5/16
      if (y + 1 < h) {
        const ni = at(x, y + 1);
        buf[ni] += er * 5 / 16; buf[ni + 1] += eg * 5 / 16; buf[ni + 2] += eb * 5 / 16;
      }
      // (x+1, y+1)   += 1/16
      if (x + 1 < w && y + 1 < h) {
        const ni = at(x + 1, y + 1);
        buf[ni] += er * 1 / 16; buf[ni + 1] += eg * 1 / 16; buf[ni + 2] += eb * 1 / 16;
      }
    }
  }
  return out;
}

export async function pixelizeToCanvas(
  source: HTMLImageElement | ImageBitmap | HTMLCanvasElement,
  outputCanvas: HTMLCanvasElement,
  options: PixelizeOptions
): Promise<void> {
  const { pixelBlockSize, scaleMethod, useFloydSteinbergDithering, palette, maxSourceDimension = 2048 } = options;

  const srcCanvas = document.createElement("canvas");
  const ctx = srcCanvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("2D context not available");

  let sw: number, sh: number;
  if (source instanceof HTMLCanvasElement) {
    sw = source.width; sh = source.height;
    srcCanvas.width = sw; srcCanvas.height = sh;
    ctx.drawImage(source, 0, 0);
  } else {
    if (source instanceof HTMLImageElement) {
      sw = source.naturalWidth; sh = source.naturalHeight;
      srcCanvas.width = sw; srcCanvas.height = sh;
      ctx.drawImage(source, 0, 0);
    } else {
      // ImageBitmap
      sw = (source as ImageBitmap).width; sh = (source as ImageBitmap).height;
      srcCanvas.width = sw; srcCanvas.height = sh;
      ctx.drawImage(source as ImageBitmap, 0, 0);
    }
  }

  // Optionally cap source dimensions to improve performance
  if (Math.max(sw, sh) > maxSourceDimension) {
    const scale = maxSourceDimension / Math.max(sw, sh);
    const nw = Math.max(1, Math.round(sw * scale));
    const nh = Math.max(1, Math.round(sh * scale));
    const tmp = document.createElement("canvas");
    tmp.width = nw; tmp.height = nh;
    const tctx = tmp.getContext("2d", { willReadFrequently: true });
    if (!tctx) throw new Error("2D context not available");
    tctx.drawImage(srcCanvas, 0, 0, nw, nh);
    sw = nw; sh = nh;
    srcCanvas.width = nw; srcCanvas.height = nh;
    ctx.clearRect(0, 0, nw, nh);
    ctx.drawImage(tmp, 0, 0);
  }

  const srcImageData = ctx.getImageData(0, 0, sw, sh);
  const targetWidth = Math.max(1, Math.floor(sw / pixelBlockSize));
  const targetHeight = Math.max(1, Math.floor(sh / pixelBlockSize));

  const lowRes = resample(srcImageData, targetWidth, targetHeight, scaleMethod);
  const quantized = quantizeToPalette(lowRes, palette, useFloydSteinbergDithering);

  // Draw to output canvas, scaled up with nearest-neighbor
  outputCanvas.width = targetWidth * pixelBlockSize;
  outputCanvas.height = targetHeight * pixelBlockSize;

  // Put quantized low-res onto a 1:1 temp canvas
  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = targetWidth; tmpCanvas.height = targetHeight;
  const qctx = tmpCanvas.getContext("2d");
  if (!qctx) throw new Error("2D context not available");
  qctx.putImageData(quantized, 0, 0);

  const octx = outputCanvas.getContext("2d");
  if (!octx) throw new Error("2D context not available");
  octx.imageSmoothingEnabled = false;
  octx.clearRect(0, 0, outputCanvas.width, outputCanvas.height);
  octx.drawImage(tmpCanvas, 0, 0, outputCanvas.width, outputCanvas.height);
} 