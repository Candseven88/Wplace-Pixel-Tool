# 🚀 Git SSH 推送到 GitHub 完整指南

> 本指南涵盖了从新项目初始化到日常开发推送的完整流程，使用SSH方式安全高效地管理代码。

## 📋 目录
- [前提条件](#前提条件)
- [SSH密钥配置](#ssh密钥配置)
- [新项目初始化](#新项目初始化)
- [日常开发流程](#日常开发流程)
- [常见问题解决](#常见问题解决)
- [最佳实践](#最佳实践)

---

## 🔐 前提条件

- ✅ 已安装 Git
- ✅ 拥有 GitHub 账户
- ✅ 已配置 SSH 密钥（如未配置，请参考下方步骤）

---

## 🔑 SSH密钥配置

### 1. 生成SSH密钥
```bash
# 生成新的SSH密钥（推荐使用ed25519算法）
ssh-keygen -t ed25519 -C "your.email@example.com"

# 按提示操作：
# - 按 Enter 使用默认文件位置 (~/.ssh/id_ed25519)
# - 可以设置密码或直接按 Enter 跳过
```

### 2. 启动SSH代理并添加密钥
```bash
# 启动SSH代理
eval "$(ssh-agent -s)"

# 添加SSH密钥到代理
ssh-add ~/.ssh/id_ed25519
```

### 3. 复制公钥到GitHub
```bash
# 查看并复制公钥内容
cat ~/.ssh/id_ed25519.pub

# macOS用户可直接复制到剪贴板
pbcopy < ~/.ssh/id_ed25519.pub
```

### 4. 在GitHub中添加SSH密钥
1. 访问 **GitHub → Settings → SSH and GPG keys**
2. 点击 **"New SSH key"**
3. 粘贴公钥内容到 Key 字段
4. 添加描述性标题
5. 点击 **"Add SSH key"**

### 5. 测试SSH连接
```bash
# 测试SSH连接是否成功
ssh -T git@github.com

# 成功显示：Hi username! You've successfully authenticated...
```

---

## 🆕 新项目初始化

### 完整初始化流程
```bash
# 1. 进入项目目录
cd your-project-folder

# 2. 初始化Git仓库
git init

# 3. 设置默认分支为main
git branch -M main

# 4. 配置用户信息（全局配置，只需执行一次）
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 5. 添加远程仓库（SSH格式）
git remote add origin git@github.com:username/repository-name.git

# 6. 验证远程仓库配置
git remote -v

# 7. 添加所有文件到暂存区
git add .

# 8. 创建首次提交
git commit -m "Initial commit"

# 9. 推送到远程仓库并设置上游分支
git push -u origin main
```

---

## 🔄 日常开发流程

### 标准推送流程
```bash
# 1. 查看当前状态
git status

# 2. 添加修改的文件
git add .
# 或者添加指定文件
git add filename.ext

# 3. 提交修改
git commit -m "描述你的修改内容"

# 4. 推送到远程仓库
git push origin main
```

### 提交信息规范示例
```bash
# 功能添加
git commit -m "feat: 添加用户登录功能"

# Bug修复
git commit -m "fix: 修复页面刷新后URL参数问题"

# 文档更新
git commit -m "docs: 更新API文档"

# 样式调整
git commit -m "style: 优化响应式布局"

# 重构代码
git commit -m "refactor: 重构用户认证模块"
```

---

## ❗ 常见问题解决

### 1. 远程仓库从HTTPS改为SSH
```bash
# 查看当前远程仓库
git remote -v

# 删除现有远程仓库
git remote remove origin

# 重新添加SSH格式的远程仓库
git remote add origin git@github.com:username/repository-name.git

# 验证配置
git remote -v
```

### 2. 推送被拒绝（远程有更新）
```bash
# 先拉取远程更新
git pull origin main

# 如果有冲突，解决冲突后重新提交
git add .
git commit -m "解决合并冲突"

# 推送到远程仓库
git push origin main
```

### 3. 强制推送（谨慎使用）
```bash
# 强制推送（会覆盖远程历史，谨慎使用）
git push --force origin main

# 更安全的强制推送
git push --force-with-lease origin main
```

### 4. SSH连接问题
```bash
# 测试SSH连接
ssh -T git@github.com

# 如果连接失败，检查SSH代理
ssh-add -l

# 重新添加SSH密钥
ssh-add ~/.ssh/id_ed25519
```

### 5. 权限被拒绝
```bash
# 确保使用正确的SSH URL格式
git remote set-url origin git@github.com:username/repository-name.git

# 检查仓库权限，确保你有推送权限
```

---

## 🌟 最佳实践

### 1. 提交频率
- ✅ **小步快跑**：频繁提交，避免一次性提交大量修改
- ✅ **功能完整**：每次提交应该是一个完整的功能或修复
- ✅ **及时推送**：重要修改及时推送到远程仓库

### 2. 分支管理
```bash
# 创建新分支开发新功能
git checkout -b feature/new-feature

# 开发完成后合并到主分支
git checkout main
git merge feature/new-feature

# 删除不需要的分支
git branch -d feature/new-feature
```

### 3. 推送前检查
```bash
# 检查当前状态
git status

# 查看具体修改内容
git diff

# 查看暂存区内容
git diff --cached

# 查看提交历史
git log --oneline -5
```

### 4. 安全考虑
- 🔒 **使用SSH密钥**：比HTTPS更安全，无需每次输入密码
- 🔒 **保护私钥**：不要分享或提交 `~/.ssh/id_ed25519` 文件
- 🔒 **定期更新**：定期更新SSH密钥，特别是在设备丢失后

---

## 📚 快速参考命令

### 基础命令
```bash
git init                    # 初始化仓库
git add .                   # 添加所有文件
git commit -m "message"     # 提交修改
git push origin main        # 推送到远程
git pull origin main        # 拉取远程更新
git status                  # 查看状态
git log                     # 查看提交历史
```

### 远程仓库管理
```bash
git remote add origin <url>      # 添加远程仓库
git remote -v                    # 查看远程仓库
git remote remove origin         # 删除远程仓库
git remote set-url origin <url>  # 修改远程仓库URL
```

### 分支操作
```bash
git branch                       # 查看分支
git branch -M main              # 重命名当前分支为main
git checkout -b <branch>        # 创建并切换分支
git merge <branch>              # 合并分支
git branch -d <branch>          # 删除分支
```

---

## 🎯 示例：Wplace项目推送

基于实际项目的完整推送示例：

```bash
# 进入项目目录
cd /path/to/wplace

# 查看当前状态
git status

# 添加所有修改的文件
git add .

# 提交修改（使用描述性信息）
git commit -m "修复URL参数问题和Sitemap抓取问题

- 修复页面刷新后自动添加URL参数的问题
- 添加用户交互检测，只有用户主动更改设置时才更新URL
- 创建静态sitemap.xml文件，确保Google能够正常抓取
- 优化Cloudflare Pages配置(_headers, _routes.json)
- 更新Next.js构建配置，支持静态导出
- 包含9种语言的多语言sitemap支持"

# 推送到GitHub
git push origin main
```

---

## 🔗 相关资源

- [GitHub SSH 官方文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Git 官方文档](https://git-scm.com/doc)
- [Git 提交信息规范](https://www.conventionalcommits.org/)

---

**💡 提示**：将此文档保存为书签，在日常开发中随时参考！

---

*最后更新：2025年1月12日* 