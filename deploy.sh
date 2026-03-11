#!/bin/bash

# 九型人格测试 - GitHub Pages 部署脚本
# Enneagram Test - GitHub Pages Deploy Script

echo "🚀 九型人格测试 - GitHub Pages 部署脚本"
echo "========================================"
echo ""

# 检查 Git 是否安装
if ! command -v git &> /dev/null; then
    echo "❌ 错误：未检测到 Git，请先安装 Git"
    echo "   Ubuntu/Debian: sudo apt-get install git"
    echo "   macOS: brew install git"
    exit 1
fi

# 获取 GitHub 用户名
echo "📝 请输入你的 GitHub 用户名:"
read -r USERNAME

# 获取仓库名
echo "📝 请输入仓库名称 (默认: enneagram-test):"
read -r REPO_NAME
REPO_NAME=${REPO_NAME:-enneagram-test}

# 确认信息
echo ""
echo "📋 部署信息:"
echo "   GitHub 用户名: $USERNAME"
echo "   仓库名称: $REPO_NAME"
echo "   网站地址: https://$USERNAME.github.io/$REPO_NAME/"
echo ""
echo "是否继续? (y/n)"
read -r CONFIRM

if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo "❌ 已取消部署"
    exit 0
fi

# 初始化 Git 仓库
echo ""
echo "📦 初始化 Git 仓库..."
git init

# 添加所有文件
echo "📦 添加文件到 Git..."
git add .

# 提交
echo "💾 提交更改..."
git commit -m "Initial commit: Enneagram personality test

Features:
- 36 professional Enneagram test questions
- 9 personality types with detailed analysis
- Responsive design for mobile and desktop
- Visual score distribution chart
- Local storage for test results

Includes:
- WeChat Mini Program version (root)
- Web version (web/ folder)"

# 添加远程仓库
echo "🔗 连接 GitHub 远程仓库..."
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git" 2>/dev/null || git remote set-url origin "https://github.com/$USERNAME/$REPO_NAME.git"

# 推送
echo "📤 推送到 GitHub..."
git branch -M main
git push -u origin main

# 检查推送结果
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码已成功推送到 GitHub!"
    echo ""
    echo "🌐 请访问以下链接启用 GitHub Pages:"
    echo "   https://github.com/$USERNAME/$REPO_NAME/settings/pages"
    echo ""
    echo "📖 详细部署指南: WEB-DEPLOY.md"
    echo ""
    echo "⏳ 启用 GitHub Pages 后，网站将在 1-2 分钟内上线:"
    echo "   https://$USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "🎉 部署完成！"
else
    echo ""
    echo "❌ 推送失败，请检查:"
    echo "   1. 是否正确输入了 GitHub 用户名"
    echo "   2. 是否在 GitHub 上创建了仓库"
    echo "   3. 是否配置了 Git 用户信息:"
    echo "      git config --global user.email 'you@example.com'"
    echo "      git config --global user.name 'Your Name'"
    echo ""
    echo "📝 或者手动执行以下命令:"
    echo "   git remote add origin https://github.com/$USERNAME/$REPO_NAME.git"
    echo "   git push -u origin main"
fi
