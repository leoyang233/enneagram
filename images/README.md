# 图标资源说明

## 底部导航栏图标

本项目需要以下 6 个图标文件，放置在 `images/` 文件夹中：

| 文件名 | 尺寸 | 说明 |
|--------|------|------|
| `home.png` | 81x81px | 首页-未选中 |
| `home-active.png` | 81x81px | 首页-选中 |
| `test.png` | 81x81px | 测试-未选中 |
| `test-active.png` | 81x81px | 测试-选中 |
| `types.png` | 81x81px | 类型-未选中 |
| `types-active.png` | 81x81px | 类型-选中 |

## 图标设计建议

### 风格
- 线性图标（推荐）或面性图标
- 描边粗细：2-4px
- 圆角设计

### 配色
- **未选中状态**：灰色 `#999999`
- **选中状态**：主题色 `#6B5B95`

## 获取图标的途径

### 1. 使用图标库（推荐）
- [阿里巴巴矢量图标库](https://www.iconfont.cn/) - 搜索"首页"、"测试"、"分类"
- [IconPark](https://iconpark.oceanengine.com/)

### 2. 使用微信官方图标
微信小程序自带一些图标，可以通过 `icon` 组件使用，但 tabBar 必须使用图片。

### 3. 使用 AI 生成
使用 Midjourney、DALL-E 等工具生成简单图标。

### 4. 暂时移除图标
如果不希望添加图标，可以修改 `app.json`，删除 tabBar 的 `iconPath` 和 `selectedIconPath` 配置。

## 快速开始

如果你暂时没有图标，可以：
1. 创建 6 个 81x81px 的透明 PNG 图片作为占位符
2. 或者修改 `app.json` 移除图标配置
