# 微软科技 - 智能翻译助手

> 🚀 强大的多引擎翻译工具，提供油猴脚本版和Chrome扩展版两种形式

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Userscript](https://img.shields.io/badge/Userscript-Tampermonkey-orange)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green)

## 📦 两个版本，任您选择

本项目提供**两个版本**，满足不同用户的需求：

<table>
<tr>
<td width="50%" align="center">

### 🔧 油猴脚本版
**weiruan-translator.user.js**

✅ 支持所有浏览器<br>
✅ 安装简单快捷<br>
✅ 可随时修改代码<br>
✅ 适合技术用户

[📖 查看文档](#油猴脚本版安装)

</td>
<td width="50%" align="center">

### 🚀 Chrome扩展版
**chrome-extension/**

✅ 无需Tampermonkey<br>
✅ 性能更好更稳定<br>
✅ 完整设置界面<br>
✅ 适合普通用户

[📖 查看文档](#chrome扩展版安装)

</td>
</tr>
</table>

## 🆚 版本对比

| 特性 | 油猴脚本版 | Chrome扩展版 |
|------|-----------|-------------|
| **选词翻译** | ✅ | ✅ |
| **多引擎对比** | ✅ | ✅ |
| **快捷键** | ✅ | ✅ (可自定义) |
| **字幕翻译** | ✅ | ✅ |
| **科技感UI** | ✅ | ✅ |
| **右键菜单** | ❌ | ✅ |
| **专业设置页** | ❌ | ✅ |
| **配置同步** | ❌ | ✅ |
| **使用统计** | ❌ | ✅ |
| **安装方式** | 需Tampermonkey | 直接安装 |
| **浏览器支持** | 全部 | Chrome系 |
| **性能** | 好 | 更好 |

**💡 推荐选择：**
- 使用Chrome/Edge浏览器？→ [Chrome扩展版](#chrome扩展版安装)
- 使用Firefox/Safari？→ [油猴脚本版](#油猴脚本版安装)
- 已安装Tampermonkey？→ [油猴脚本版](#油猴脚本版安装)
- 不想装额外工具？→ [Chrome扩展版](#chrome扩展版安装)

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

---

### 油猴脚本版安装

#### 第一步：安装Tampermonkey

选择您的浏览器，安装Tampermonkey扩展：

- **Chrome/Edge**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)
- **Safari**: [Tampermonkey](https://apps.apple.com/app/tampermonkey/id1482490089)

#### 第二步：安装翻译脚本

1. 打开脚本文件：`weiruan-translator.user.js`
2. Tampermonkey 会自动识别并弹出安装界面
3. 点击"安装"按钮完成安装
4. 脚本图标显示在Tampermonkey列表中

#### 第三步：开始使用

打开任意网页：

1. **选词翻译** - 选中文本，翻译面板自动弹出
2. **快捷键** - 按 `Alt + Q` 快速翻译
3. **字幕翻译** - Tampermonkey菜单中开启"切换字幕自动翻译"

#### 油猴版配置

- 点击Tampermonkey图标 → 找到本脚本菜单
- "设置目标语言" - 选择翻译目标语言
- "切换字幕自动翻译" - 开启/关闭字幕翻译
- "关于翻译助手" - 查看版本信息

---

### Chrome扩展版安装

#### 第一步：准备图标文件

扩展需要3个尺寸的图标。**临时测试方案**（访问并下载）：

```
https://via.placeholder.com/128/667eea/ffffff?text=T
→ 保存为: chrome-extension/icons/icon128.png

https://via.placeholder.com/48/667eea/ffffff?text=T
→ 保存为: chrome-extension/icons/icon48.png

https://via.placeholder.com/16/667eea/ffffff?text=T
→ 保存为: chrome-extension/icons/icon16.png
```

**正式使用方案**：参考 `chrome-extension/icons/ICON_GUIDE.md` 制作专业图标

#### 第二步：加载扩展

1. 打开Chrome浏览器，访问 `chrome://extensions/`
2. 开启右上角的"开发者模式"开关
3. 点击"加载已解压的扩展程序"
4. 选择项目中的 `chrome-extension` 文件夹
5. 点击"选择文件夹"完成安装

#### 第三步：开始使用

扩展安装后：

1. **选词翻译** - 选中网页文本，自动弹出翻译
2. **快捷键** - 按 `Alt + Q` 快速翻译（可在 chrome://extensions/shortcuts 自定义）
3. **右键菜单** - 右键选中文本 → "翻译选中文本"
4. **扩展图标** - 点击工具栏图标打开快捷设置
5. **字幕翻译** - 在扩展设置中开启

#### Chrome版配置

- **快捷设置** - 点击扩展图标，快速调整
- **高级设置** - 右键扩展图标 → 选项
- **自定义快捷键** - chrome://extensions/shortcuts
- **测试页面** - 点击扩展图标 → "测试页面"

#### 详细文档

完整安装和使用说明：
- 📖 [Chrome扩展详细文档](chrome-extension/README.md)
- 📖 [安装对比指南](CHROME_EXTENSION_GUIDE.md)

---

### 通用使用方法

两个版本的核心使用方式相同：

#### 方式一：选词翻译
1. 在网页上选中要翻译的文本
2. 翻译面板自动弹出显示
3. 查看多个引擎的翻译结果
4. 点击结果即可复制到剪贴板

#### 方式二：快捷键翻译
1. 选中文本
2. 按 `Alt + Q`（可自定义）
3. 立即显示翻译面板

#### 方式三：右键翻译（仅Chrome扩展版）
1. 选中文本后右键
2. 点击"翻译选中文本"
3. 查看翻译结果

---

## 🎮 快捷键说明

| 快捷键 | 功能 | 油猴版 | 扩展版 |
|-------|------|--------|--------|
| `Alt + Q` | 翻译选中文本 | ✅ | ✅ |
| 点击翻译结果 | 复制到剪贴板 | ✅ | ✅ |
| 拖动标题栏 | 移动翻译面板 | ✅ | ✅ |
| 点击 × 按钮 | 关闭翻译面板 | ✅ | ✅ |
| 右键菜单 | 快捷翻译 | ❌ | ✅ |

**自定义快捷键：**
- **油猴版**：修改脚本中的 `hotkey` 配置项
- **Chrome版**：访问 `chrome://extensions/shortcuts` 自定义

---

## ⚙️ 设置选项

### 油猴脚本版设置

在 Tampermonkey 菜单中：

1. **设置目标语言** - 选择翻译目标语言
   - 支持语言：中文、英语、日语、韩语、法语、德语、西班牙语等
2. **切换字幕自动翻译** - 开启/关闭视频字幕翻译
3. **关于翻译助手** - 查看版本信息

### Chrome扩展版设置

**快捷设置（点击扩展图标）：**
- 开启/关闭翻译功能
- 更改目标语言（10+种语言）
- 切换字幕自动翻译
- 查看使用提示

**高级设置（右键图标→选项）：**
- 🌍 目标语言选择（15种语言）
- 📺 字幕翻译开关
- 💬 翻译提示开关
- ⌨️ 快捷键说明和指引
- 🎨 主题配色选择（科技蓝/紫罗兰/翠绿色）
- 📊 使用统计（总次数/今日/常用引擎）
- ℹ️ 关于和版本信息
- 💾 配置导出/导入/重置

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

### 油猴脚本版配置

修改脚本文件中的 `CONFIG` 对象：

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

**快捷键可选值：**
- `altKey+KeyQ` - Alt + Q
- `ctrlKey+KeyT` - Ctrl + T
- `shiftKey+KeyE` - Shift + E
- `altKey+KeyA` - Alt + A

### Chrome扩展版配置

**方式一：通过设置界面**
- 右键扩展图标 → 选项
- 在设置页面中可视化调整所有配置
- 配置自动保存并同步

**方式二：导出/导入配置**
- 在设置页面点击"导出配置"
- 下载JSON配置文件
- 修改后可导入恢复

**方式三：修改代码**
- 编辑 `chrome-extension/scripts/content.js`
- 修改 `CONFIG` 对象（同油猴版）
- 在 `chrome://extensions/` 重新加载扩展

## 🔒 隐私安全

- ✅ 本地运行，不收集任何用户数据
- ✅ 直连翻译API，不经过第三方服务器
- ✅ 不上传浏览历史或个人信息
- ✅ 开源代码，可自行审查

## 🐛 常见问题

### 通用问题

**Q: 翻译面板没有弹出？**
- A: 检查是否正确选中了文本（长度>1个字符）
- A: 刷新页面后重试
- A: 检查扩展/脚本是否已启用

**Q: 某些翻译引擎显示"翻译失败"？**
- A: 网络问题或API暂时限制，其他引擎仍可正常使用
- A: 稍后重试即可恢复

**Q: 如何更改翻译语言？**
- **油猴版**: Tampermonkey菜单 → 设置目标语言
- **Chrome版**: 点击扩展图标 → 选择目标语言

**Q: 字幕翻译不工作？**
- **油猴版**: Tampermonkey菜单 → 切换字幕自动翻译
- **Chrome版**: 扩展设置 → 开启自动翻译视频字幕

**Q: 可以添加更多翻译引擎吗？**
- A: 可以！在代码中的 `TranslationEngine` 类添加新方法即可

### 油猴脚本版问题

**Q: 脚本无法安装？**
- A: 确认已安装Tampermonkey扩展
- A: 确认浏览器版本支持

**Q: 脚本冲突？**
- A: 暂时禁用其他翻译脚本测试

### Chrome扩展版问题

**Q: 扩展无法加载？**
- A: 检查是否选择了正确的文件夹（chrome-extension）
- A: 确认图标文件已创建（icon16/48/128.png）
- A: 查看错误信息，检查manifest.json格式

**Q: 快捷键不工作？**
- A: 访问 chrome://extensions/shortcuts 检查快捷键设置
- A: 可能与其他扩展冲突，尝试更改快捷键

**Q: 配置无法保存？**
- A: 确认manifest.json声明了"storage"权限
- A: 检查Chrome是否启用了同步功能

**Q: 翻译API请求失败？**
- A: 检查manifest.json的host_permissions是否正确
- A: 查看background service worker的日志

**Q: 两个版本可以同时使用吗？**
- A: 可以同时安装，但建议只启用一个避免冲突

## 📝 更新日志

### v1.0.0 (2025-12-27)

**🎉 首次发布 - 双版本同步上线**

#### 油猴脚本版 (weiruan-translator.user.js)
- ✨ 支持选词翻译功能
- ✨ 集成 Google、Bing、MyMemory 三大免费翻译引擎
- ✨ 支持视频字幕自动翻译（YouTube、Netflix等）
- ✨ 实现科技感UI界面（渐变、毛玻璃、流光动画）
- ✨ 添加快捷键支持（Alt+Q，可自定义）
- ✨ 支持拖拽面板和一键复制
- ✨ 智能缓存机制，减少重复请求
- ✨ 完全免费，无需API密钥
- 📦 600+行代码，纯JavaScript实现
- 🌐 支持所有主流浏览器

#### Chrome扩展版 (chrome-extension/)
- 🚀 **新增Chrome原生扩展版本**
- ✨ 基于Manifest V3最新标准
- ✨ Service Worker后台处理，性能更优
- ✨ 无需Tampermonkey，直接安装使用
- ✨ 专业Popup弹窗界面
- ✨ 完整Options设置页面
- ✨ 右键菜单快捷翻译
- ✨ 原生快捷键支持（可在chrome://extensions/shortcuts自定义）
- ✨ 配置云同步（Chrome账户自动同步）
- ✨ 使用统计功能（总次数/今日/常用引擎）
- ✨ 主题配色选择（科技蓝/紫罗兰/翠绿色）
- ✨ 配置导出/导入功能
- 📦 3000+行代码，完整扩展架构
- 🌐 支持Chrome、Edge等Chromium浏览器

#### 核心特性（两版本共享）
- 🎯 选词翻译 - 自动弹出面板
- 🌐 多引擎对比 - 并行请求3个翻译API
- 📺 字幕翻译 - 实时翻译视频字幕
- 🎨 科技感UI - 渐变色、毛玻璃、动画效果
- ⚡ 快速响应 - 秒级返回翻译结果
- 📋 一键复制 - 点击结果复制到剪贴板
- 🔒 隐私安全 - 本地运行，不收集数据
- 💻 开源免费 - MIT协议，代码完全开放

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程
1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发建议

**油猴脚本版开发：**
- 编辑 `weiruan-translator.user.js`
- 在Tampermonkey中重新加载脚本测试
- 确保兼容主流浏览器

**Chrome扩展版开发：**
- 编辑 `chrome-extension/` 目录下的文件
- 在 `chrome://extensions/` 重新加载扩展
- 参考 [Chrome扩展开发文档](https://developer.chrome.com/docs/extensions/)
- 遵循Manifest V3规范

### TODO 列表

#### 通用功能
- [ ] 集成 Tesseract.js 实现图片OCR翻译
- [ ] 添加更多免费翻译API（DeepL、百度翻译、腾讯翻译等）
- [ ] 添加翻译历史记录功能
- [ ] 支持划词朗读功能（TTS）
- [ ] 添加生词本功能
- [ ] 支持更多视频网站字幕翻译
- [ ] 添加PDF文档翻译支持

#### 油猴版改进
- [ ] 支持自定义主题配色（通过菜单）
- [ ] 添加翻译历史面板
- [ ] 优化移动端体验

#### Chrome扩展版改进
- [ ] 发布到Chrome Web Store
- [ ] 添加翻译历史页面
- [ ] 实现离线翻译缓存
- [ ] 添加多语言界面支持
- [ ] 优化Service Worker性能
- [ ] 添加更多主题配色方案
- [ ] 实现翻译结果导出功能

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
- 🤝 提交 Pull Request

## 📚 相关文档

### 主要文档
- 📖 **[本README](README.md)** - 项目总览和快速开始
- 📖 **[Chrome扩展详细文档](chrome-extension/README.md)** - 扩展开发和调试
- 📖 **[安装对比指南](CHROME_EXTENSION_GUIDE.md)** - 两版本详细对比

### 辅助文档
- 📖 **[图标制作指南](chrome-extension/icons/ICON_GUIDE.md)** - 创建扩展图标
- 📖 **[测试页面](demo.html)** - 功能测试页面

### 外部资源
- 🌐 [Chrome扩展开发文档](https://developer.chrome.com/docs/extensions/)
- 🌐 [Tampermonkey文档](https://www.tampermonkey.net/documentation.php)
- 🌐 [Manifest V3迁移指南](https://developer.chrome.com/docs/extensions/mv3/intro/)

## 📊 项目结构

```
weiruan-translation/
├── weiruan-translator.user.js      # 油猴脚本版本
├── demo.html                        # 功能测试页面
├── README.md                        # 本文件
├── CHROME_EXTENSION_GUIDE.md        # Chrome扩展安装对比指南
│
└── chrome-extension/                # Chrome扩展版本
    ├── manifest.json                # 扩展配置文件
    ├── README.md                    # 扩展详细文档
    ├── demo.html                    # 测试页面
    ├── icons/                       # 图标文件夹
    │   ├── icon16.png              # 16x16图标
    │   ├── icon48.png              # 48x48图标
    │   ├── icon128.png             # 128x128图标
    │   └── ICON_GUIDE.md           # 图标制作指南
    ├── scripts/                     # 脚本文件夹
    │   ├── background.js           # Service Worker
    │   ├── content.js              # 内容脚本
    │   └── content.css             # 样式文件
    ├── popup/                       # 弹窗页面
    │   ├── popup.html
    │   ├── popup.css
    │   └── popup.js
    └── options/                     # 设置页面
        ├── options.html
        ├── options.css
        └── options.js
```

---

<div align="center">

**[油猴版安装](#油猴脚本版安装) | [Chrome版安装](#chrome扩展版安装) | [功能特性](#功能特性) | [版本对比](#版本对比) | [常见问题](#常见问题)**

Made with ❤️ by **微软科技**

**选择最适合您的版本，开始享受智能翻译体验！**

</div>
