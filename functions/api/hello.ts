export const onRequest = async () => {
  return new Response(
    JSON.stringify({ ok: true, name: "wplace", message: "Hello from Cloudflare Pages Functions" }),
    { headers: { "content-type": "application/json; charset=utf-8" } }
  );
}; 