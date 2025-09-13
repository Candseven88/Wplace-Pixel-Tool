# Cloudflare Pages 部署配置指南

## 🚀 当前部署状态

**项目名称**: `wplace-pixel-tool`  
**GitHub仓库**: https://github.com/Candseven88/Wplace-Pixel-Tool  
**部署URL**: https://wplace.website  

## 📋 部署配置详情

### 1. 构建设置 (Build Settings)

```
构建命令 (Build command): npm run build
构建输出目录 (Build output directory): out
根目录 (Root directory): / (项目根目录)
环境变量 (Environment variables): NODE_ENV=production
```

### 2. Next.js 静态导出配置

项目使用 Next.js 静态导出模式：
- `output: "export"` 在 `next.config.ts` 中配置
- 构建后文件存储在 `/out` 目录
- Cloudflare Pages 部署 `/out` 目录内容

### 3. Sitemap 文件配置

**重要**: sitemap文件位置和更新流程
```
源文件位置: /public/sitemap*.xml
构建后位置: /out/sitemap*.xml (自动复制)
线上访问: https://wplace.website/sitemap*.xml
```

## 🔧 建议的 Cloudflare Pages 配置

### 在 Cloudflare Dashboard 中设置：

1. **进入 Pages 项目设置**
   - 登录 Cloudflare Dashboard
   - 选择 Pages → wplace-pixel-tool

2. **构建和部署设置**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: out
   Root directory (advanced): / 
   ```

3. **环境变量**
   ```
   NODE_ENV = production
   NEXT_PUBLIC_SITE_URL = https://wplace.website
   ```

4. **自定义域名**
   ```
   Primary domain: wplace.website
   ```

## 📦 自动部署流程

1. **GitHub 推送触发**
   ```bash
   git add .
   git commit -m "Update sitemap files"
   git push origin main
   ```

2. **Cloudflare 自动构建**
   - 检测到 GitHub 推送
   - 运行 `npm run build`
   - 部署 `/out` 目录到 CDN

3. **验证部署结果**
   ```bash
   # 验证 sitemap 文件
   curl -I https://wplace.website/sitemap-index.xml
   
   # 运行验证脚本
   ./validate-sitemaps.sh
   ```

## ⚠️ 重要注意事项

### Sitemap 更新流程
1. **修改源文件**: 更新 `/public/sitemap*.xml`
2. **本地构建**: 运行 `npm run build`
3. **提交代码**: 推送到 GitHub
4. **自动部署**: Cloudflare 自动部署新版本

### 常见问题解决

**问题**: GSC 显示 "无法抓取" sitemap
**解决**: 
- 确保修改了 `/public` 目录中的源文件
- 重新构建项目 (`npm run build`)
- 推送到 GitHub 触发自动部署

**问题**: XML Content-Type 不正确
**解决**: 
- 检查 `/public/_headers` 文件配置
- 确保包含 `sitemap*.xml` 的 Content-Type 设置

## 🔍 验证检查清单

- [ ] GitHub 代码已推送到最新版本
- [ ] Cloudflare Pages 自动部署成功
- [ ] sitemap 文件可正常访问
- [ ] Content-Type 返回 `application/xml`
- [ ] GSC 中 sitemap 状态正常

## 📞 故障排除

如果部署失败，检查：
1. `package.json` 中的构建脚本
2. `next.config.ts` 导出配置
3. Cloudflare Pages 构建日志
4. 环境变量设置

## 🚀 性能优化建议

1. **启用 Cloudflare 缓存**
2. **配置适当的 Cache-Control 头**
3. **启用 Brotli 压缩**
4. **设置适当的 TTL**

---
*最后更新: 2025年9月13日* 