# 九型人格分析 - 网页版

一个基于 HTML/CSS/JavaScript 的九型人格测试网站，完全响应式设计，支持桌面和移动设备。

## 📁 文件结构

```
web/
├── index.html          # 首页
├── test.html           # 测试页面
├── result.html         # 测试结果页面
├── types.html          # 人格类型列表
├── detail.html         # 人格类型详情
├── data.js             # 九型人格数据和测试题目
├── styles.css          # 样式文件
├── app.js              # 交互脚本
└── README.md           # 本文件
```

## 🚀 部署方式

### 方式一：静态托管（推荐）

#### 1. GitHub Pages
1. 在 GitHub 创建新仓库
2. 上传 `web/` 文件夹内的所有文件到仓库
3. 进入 Settings → Pages
4. Source 选择 Deploy from a branch，Branch 选择 main
5. 访问 `https://你的用户名.github.io/仓库名`

#### 2. Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 注册/登录账号
3. 点击 "Add New Project"
4. 导入 GitHub 仓库或直接上传文件
5. 自动部署，获得 `.vercel.app` 域名

#### 3. Netlify
1. 访问 [netlify.com](https://netlify.com)
2. 将 `web/` 文件夹拖放到部署区域
3. 自动部署，获得 `.netlify.app` 域名

#### 4. 腾讯云/阿里云 COS
1. 购买对象存储服务
2. 创建存储桶，设置为公共读
3. 上传所有文件
4. 开启静态网站托管
5. 绑定自定义域名（可选）

### 方式二：自有服务器

1. 将 `web/` 文件夹内的文件上传到服务器
2. 配置 Nginx/Apache 指向该目录

#### Nginx 配置示例
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/enneagram;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 方式三：本地预览

直接双击 `index.html` 文件，或在终端运行：

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

然后访问 `http://localhost:8000`

## ✨ 功能特性

- 📱 完全响应式设计，支持手机、平板、电脑
- 🎨 现代化 UI，渐变色彩设计
- 📊 可视化得分分布图表
- 💾 本地存储测试进度和结果
- 🔗 支持分享链接（结果页可复制链接）
- 🚀 纯前端实现，无需后端服务器

## 🎨 自定义主题

修改 `styles.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #6B5B95;    /* 主色调 */
    --secondary-color: #88B04B;  /* 辅助色 */
    --bg-color: #f5f5f5;         /* 背景色 */
    --text-color: #333333;       /* 文字颜色 */
}
```

## 📊 数据说明

测试题目和人格类型数据存储在 `data.js` 中，包含：
- 9 种人格类型的详细信息
- 36 道测试题目（每种类型 4 题）
- 每种类型的优势、弱点、动机描述

## 🔧 技术栈

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript (ES6+)
- LocalStorage API

## 📄 License

MIT License
