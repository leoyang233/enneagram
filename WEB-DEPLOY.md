# 🚀 GitHub Pages 部署指南

## 📋 准备工作

### 1. 创建 GitHub 账号
如果你还没有 GitHub 账号，请访问 [github.com](https://github.com) 注册。

### 2. 创建新仓库

1. 登录 GitHub
2. 点击右上角 `+` → `New repository`
3. 填写仓库名称，例如：`enneagram-test`
4. 选择 **Public**（公开）
5. 点击 `Create repository`

---

## 📤 上传代码

### 方式一：命令行（推荐）

```bash
# 1. 进入项目目录
cd /home/ubuntu/code/demo101

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交代码
git commit -m "Initial commit: Enneagram personality test"

# 5. 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/enneagram-test.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

### 方式二：网页上传

1. 在新创建的仓库页面，点击 `uploading an existing file`
2. 拖拽 `web/` 文件夹内的所有文件到上传区域
3. 点击 `Commit changes`

---

## ⚙️ 配置 GitHub Pages

### 1. 启用 GitHub Pages

1. 在你的仓库页面，点击 **Settings**（设置）
2. 左侧菜单选择 **Pages**
3. **Source** 选择 `Deploy from a branch`
4. **Branch** 选择 `main`，文件夹选择 `/(root)`
5. 点击 **Save**

### 2. 使用 GitHub Actions（自动部署）

我已经为你创建了 GitHub Actions 配置文件 `.github/workflows/deploy.yml`，它会自动部署 `web/` 文件夹。

配置步骤：

1. 在仓库页面，点击 **Settings** → **Pages**
2. **Source** 选择 `GitHub Actions`
3. 系统会自动识别 `deploy.yml` 配置
4. 点击 **Actions** 标签查看部署状态

---

## 🔗 访问你的网站

配置完成后，等待 1-2 分钟，然后访问：

```
https://YOUR_USERNAME.github.io/enneagram-test/
```

将 `YOUR_USERNAME` 替换为你的 GitHub 用户名。

---

## 🔄 更新网站

当你修改代码后，推送到 GitHub 会自动重新部署：

```bash
git add .
git commit -m "Update: xxx"
git push origin main
```

---

## 🌟 自定义域名（可选）

如果你想使用自己的域名（如 `enneagram.yourdomain.com`）：

### 1. 配置 DNS
在你的域名服务商添加 CNAME 记录：
```
主机记录: enneagram
记录类型: CNAME
记录值: YOUR_USERNAME.github.io
```

### 2. 添加 CNAME 文件
在 `web/` 文件夹创建 `CNAME` 文件：
```
enneagram.yourdomain.com
```

### 3. 启用 HTTPS
在 GitHub Pages 设置中勾选 `Enforce HTTPS`。

---

## ❓ 常见问题

### Q: 页面显示 404 错误？
A: 检查：
1. 仓库是否设置为 Public
2. GitHub Pages 是否已启用（需要等待 1-5 分钟）
3. 访问地址是否正确

### Q: 样式没有加载？
A: 确保 `web/` 文件夹内有完整的文件，特别是 `styles.css`

### Q: 如何更新网站内容？
A: 修改文件后，重新 `git push` 到 GitHub，会自动重新部署

### Q: 能否设置为私有仓库？
A: 可以，但 GitHub Pages 免费版仅支持 Public 仓库。私有仓库需要 GitHub Pro。

---

## 📱 分享你的测试

部署完成后，你可以：

1. **分享到微信** - 复制链接发送给朋友
2. **生成二维码** - 使用在线二维码生成器
3. **嵌入到公众号** - 在公众号文章中添加链接

---

## 🎉 恭喜！

你的九型人格测试网站现在已经上线！🎊

需要帮助？查看 [GitHub Pages 文档](https://docs.github.com/en/pages)
