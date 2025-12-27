# 微软科技 - 智能翻译助手

> 🚀 强大的多引擎翻译油猴脚本，支持选词翻译、图片OCR翻译、视频字幕翻译

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-orange)

## ✨ 功能特性

### 🎯 核心功能
- **选词翻译** - 鼠标选中任意文本即可翻译，支持快捷键 `Alt + Q` 快速触发
- **多引擎对比** - 同时展示 Google翻译、Bing翻译、MyMemory翻译 三个翻译结果
- **图片OCR翻译** - 右键图片即可识别并翻译图片中的文字（开发中）
- **字幕自动翻译** - 支持 YouTube、Netflix 等视频网站的字幕实时翻译
- **一键复制** - 点击翻译结果即可复制到剪贴板

### 🎨 界面特色
- **科技感UI设计** - 渐变色、毛玻璃效果、流光动画
- **暗色主题** - 护眼的深色界面，支持夜间使用
- **可拖拽面板** - 翻译面板可自由拖动，不遮挡内容
- **响应式布局** - 自适应屏幕大小，移动端友好

### ⚡ 性能优势
- **完全免费** - 使用免费API，无需付费
- **快速响应** - 并行请求多个翻译引擎，秒级返回结果
- **智能缓存** - 字幕翻译结果缓存，减少重复请求
- **轻量级** - 纯JavaScript实现，不依赖外部库

## 📦 安装使用

### 1. 安装浏览器扩展

首先需要安装油猴脚本管理器（选择其一）：

- **Chrome/Edge**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)
- **Safari**: [Tampermonkey](https://apps.apple.com/app/tampermonkey/id1482490089)

### 2. 安装翻译脚本

1. 点击安装脚本文件：`weiruan-translator.user.js`
2. Tampermonkey 会自动识别并弹出安装界面
3. 点击"安装"按钮完成安装

### 3. 开始使用

安装完成后，打开任意网页即可使用：

#### 方法一：选词翻译
1. 用鼠标选中要翻译的文本
2. 翻译面板会自动弹出
3. 查看多个翻译结果，点击即可复制

#### 方法二：快捷键翻译
1. 选中文本后按 `Alt + Q`
2. 快速打开翻译面板

#### 方法三：字幕翻译
1. 在 Tampermonkey 菜单中点击"切换字幕自动翻译"
2. 播放视频时，字幕会自动显示翻译

## 🎮 快捷键说明

| 快捷键 | 功能 |
|-------|------|
| `Alt + Q` | 翻译选中文本 |
| `点击翻译结果` | 复制到剪贴板 |
| `拖动标题栏` | 移动翻译面板 |
| `点击 × 按钮` | 关闭翻译面板 |

## ⚙️ 设置选项

在 Tampermonkey 菜单中可以找到以下选项：

1. **设置目标语言** - 自定义翻译目标语言（默认：zh-CN）
   - 中文简体：`zh-CN`
   - 中文繁体：`zh-TW`
   - 英语：`en`
   - 日语：`ja`
   - 韩语：`ko`
   - 法语：`fr`
   - 德语：`de`
   - 西班牙语：`es`

2. **切换字幕自动翻译** - 开启/关闭视频字幕翻译功能

3. **关于翻译助手** - 查看版本信息和功能说明

## 🔧 支持的网站

理论上支持所有网站，特别优化了以下平台：

- ✅ 新闻网站（BBC、CNN、NYTimes 等）
- ✅ 技术文档（GitHub、StackOverflow、MDN 等）
- ✅ 社交媒体（Twitter、Reddit、Facebook 等）
- ✅ 视频网站（YouTube、Netflix、Bilibili 等）
- ✅ 电商平台（Amazon、eBay、AliExpress 等）

## 🌐 翻译引擎

### 当前集成的免费API：

| 引擎 | 说明 | 特点 |
|------|------|------|
| 🌐 Google翻译 | Google Translate API | 准确度高，支持语言最多 |
| 🔷 Bing翻译 | Microsoft Translator | 专业术语翻译准确 |
| 📚 MyMemory | MyMemory Translation | 完全免费，无限制调用 |

### 翻译质量保证：

- 并行请求多个引擎，对比结果选择最佳
- 自动语言检测，无需手动选择源语言
- 智能去重，过滤相同的翻译结果
- 错误重试机制，确保翻译成功率

## 📱 界面预览

### 翻译面板
```
┌─────────────────────────────────────┐
│ ⚡ 智能翻译助手              ×     │ ← 可拖动标题栏
├─────────────────────────────────────┤
│ 原文                                │
│ Hello World                         │
│                                     │
│ 🌐 Google翻译                       │
│ 你好世界                            │ ← 点击复制
│                                     │
│ 🔷 Bing翻译                         │
│ 你好世界                            │
│                                     │
│ 📚 MyMemory翻译                     │
│ 你好世界                            │
├─────────────────────────────────────┤
│      Powered by 微软科技            │
└─────────────────────────────────────┘
```

### 配色方案
- **主色调**: 科技蓝 (`#00d9ff`)
- **辅助色**: 紫罗兰 (`#667eea`)
- **背景色**: 深灰黑 (`rgba(17, 24, 39, 0.98)`)
- **卡片背景**: 中灰 (`rgba(31, 41, 55, 0.95)`)
- **特效**: 毛玻璃、光影、渐变、流光

## 🛠️ 高级配置

如需自定义配置，可以修改脚本中的 `CONFIG` 对象：

```javascript
const CONFIG = {
    hotkey: 'altKey+KeyQ',              // 快捷键设置
    autoTranslateSubtitle: false,       // 是否自动翻译字幕
    showTranslationCount: 3,            // 显示翻译结果数量
    targetLang: 'zh-CN',                // 目标语言
    theme: {                            // 主题配色
        primary: '#00d9ff',
        secondary: '#667eea',
        // ... 更多配色选项
    }
};
```

### 修改快捷键

在脚本中找到 `hotkey` 配置项，可修改为：
- `altKey+KeyQ` - Alt + Q
- `ctrlKey+KeyT` - Ctrl + T
- `shiftKey+KeyE` - Shift + E
- `altKey+KeyA` - Alt + A

## 🔒 隐私安全

- ✅ 本地运行，不收集任何用户数据
- ✅ 直连翻译API，不经过第三方服务器
- ✅ 不上传浏览历史或个人信息
- ✅ 开源代码，可自行审查

## 🐛 常见问题

### Q: 翻译面板没有弹出？
A: 请检查是否正确选中了文本，文本长度需要大于1个字符。

### Q: 某些翻译引擎显示"翻译失败"？
A: 可能是网络问题或API限制，通常其他引擎仍可正常工作。

### Q: 如何更改翻译语言？
A: 点击 Tampermonkey 图标 → 微软科技翻译助手菜单 → 设置目标语言

### Q: 字幕翻译不工作？
A: 在菜单中开启"切换字幕自动翻译"功能。

### Q: 可以添加更多翻译引擎吗？
A: 可以，在代码中的 `TranslationEngine` 类中添加新的翻译方法即可。

## 📝 更新日志

### v1.0.0 (2025-12-27)
- 🎉 首次发布
- ✨ 支持选词翻译功能
- ✨ 集成 Google、Bing、MyMemory 三大翻译引擎
- ✨ 支持视频字幕自动翻译
- ✨ 实现科技感UI界面
- ✨ 添加快捷键支持（Alt+Q）
- ✨ 支持拖拽和一键复制

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发建议
1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### TODO 列表
- [ ] 集成 Tesseract.js 实现图片OCR翻译
- [ ] 添加更多免费翻译API（DeepL、百度翻译等）
- [ ] 支持自定义主题配色
- [ ] 添加翻译历史记录功能
- [ ] 支持划词朗读功能
- [ ] 添加生词本功能
- [ ] 优化移动端体验

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源协议

## 👨‍💻 关于作者

**微软科技** - 专注于开发实用的浏览器工具

- 🌐 官网：微软科技
- 📧 联系：欢迎反馈建议

## 💖 支持项目

如果这个项目对你有帮助，欢迎：
- ⭐ Star 本项目
- 🐛 报告 Bug
- 💡 提出新功能建议
- 📢 分享给更多人

---

<div align="center">

**[安装使用](#安装使用) | [功能特性](#功能特性) | [常见问题](#常见问题)**

Made with ❤️ by **微软科技**

</div>
