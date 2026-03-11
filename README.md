# 九型人格分析

一个基于九型人格（Enneagram）理论的性格分析应用，包含**微信小程序版**和**网页版**。

## 📦 项目包含

| 版本 | 路径 | 说明 |
|------|------|------|
| 微信小程序 | `/` 根目录 | 原生微信小程序 |
| 网页版 | `/web/` | 响应式网站，纯前端 |

---

## 🚀 快速开始

### 网页版（最快体验）
```bash
cd web
# 使用 Python 启动本地服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

### 🚀 一键部署到 GitHub Pages
```bash
# 运行部署脚本
./deploy.sh
```
然后访问 `https://你的用户名.github.io/仓库名/`

详细步骤见 [WEB-DEPLOY.md](WEB-DEPLOY.md)

### 微信小程序版
使用微信开发者工具导入项目根目录。

---

## 📱 微信小程序版

原生微信小程序，需要在微信环境中运行。

## 功能特性

- 🔮 **专业测试**：36道精心设计的测试题目，全面评估九种人格类型
- 📊 **详细报告**：测试后展示得分分布和详细的人格类型解析
- 📚 **类型百科**：九种人格类型的详细介绍，包括特征、优势、成长建议
- 🎯 **成长指南**：针对每种类型提供个性化的人际关系和成长建议

## 项目结构

```
.
├── app.js                 # 小程序入口逻辑
├── app.json               # 小程序全局配置
├── app.wxss               # 全局样式
├── sitemap.json           # 站点地图配置
├── data/
│   └── enneagram.js       # 九型人格数据和测试题目
├── pages/
│   ├── index/             # 首页
│   ├── test/              # 测试页面
│   ├── result/            # 测试结果页面
│   ├── types/             # 人格类型列表
│   └── detail/            # 人格类型详情
└── images/                # 图片资源（需自行添加）
```

## 九型人格类型

| 类型 | 名称 | 英文名 | 核心特征 |
|-----|------|--------|---------|
| 1号 | 完美主义者 | The Reformer | 追求完美，讲究原则 |
| 2号 | 助人者 | The Helper | 热心助人，善解人意 |
| 3号 | 成就者 | The Achiever | 目标导向，追求成功 |
| 4号 | 浪漫主义者 | The Individualist | 追求独特，情感丰富 |
| 5号 | 观察者 | The Investigator | 求知欲强，善于观察 |
| 6号 | 忠诚者 | The Loyalist | 重视安全，忠诚可靠 |
| 7号 | 享乐主义者 | The Enthusiast | 乐观开朗，追求快乐 |
| 8号 | 挑战者 | The Challenger | 自信果断，追求力量 |
| 9号 | 和平者 | The Peacemaker | 追求和谐，性格平和 |

## 如何使用

### 开发环境

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开微信开发者工具，选择「导入项目」
3. 选择本项目文件夹，填写你的 AppID
4. 点击「导入」即可开始开发

### 发布上线

1. 在微信开发者工具中点击「上传」
2. 登录[微信公众平台](https://mp.weixin.qq.com/)
3. 进入「版本管理」，将开发版本提交审核
4. 审核通过后即可发布

## 自定义配置

### 修改主题色

在 `app.wxss` 中修改变量：

```css
page {
  --primary-color: #6B5B95;    /* 主色调 */
  --secondary-color: #88B04B;  /* 辅助色 */
  --accent-color: #F7CAC9;     /* 强调色 */
}
```

### 添加底部导航图标

在 `images/` 文件夹中添加以下图标：
- `home.png` / `home-active.png` - 首页
- `test.png` / `test-active.png` - 测试
- `types.png` / `types-active.png` - 类型

## 🌐 网页版

纯 HTML/CSS/JavaScript 实现，无需后端，可部署到任何静态托管服务。

### 网页版部署

#### 方式一：GitHub Pages（免费）
1. Fork 本项目
2. 进入 Settings → Pages
3. 选择 Branch: main, Folder: /web
4. 访问 `https://你的用户名.github.io/仓库名/web/`

#### 方式二：Vercel（推荐）
1. 访问 [vercel.com](https://vercel.com)
2. 导入 GitHub 仓库
3. 设置根目录为 `web/`
4. 自动部署

#### 方式三：Netlify Drop（最简单）
1. 访问 [netlify.com](https://netlify.com)
2. 将 `web/` 文件夹拖放到页面中
3. 完成！

### 网页版文件结构
```
web/
├── index.html      # 首页
├── test.html       # 测试页
├── result.html     # 结果页
├── types.html      # 类型列表
├── detail.html     # 类型详情
├── data.js         # 数据文件
├── styles.css      # 样式
└── app.js          # 脚本
```

---

## 技术栈

### 微信小程序版
- 微信小程序原生开发
- WXSS 样式
- ES6+ JavaScript

### 网页版
- HTML5 + CSS3 + Vanilla JS
- LocalStorage 本地存储
- 响应式设计 (Mobile First)

## 数据来源

九型人格理论（Enneagram of Personality）是一种描述人类性格类型的系统。本项目的数据基于经典的九型人格理论整理。

## 免责声明

本测试结果仅供参考，不能替代专业的心理评估。如需深入了解自己的人格特征，建议咨询专业的心理咨询师。

## License

MIT
