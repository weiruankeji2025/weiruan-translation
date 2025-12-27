# 微软科技 - 智能翻译助手 (Chrome扩展版)

> 🚀 从油猴脚本改造的Chrome浏览器扩展，无需Tampermonkey即可使用

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Chrome](https://img.shields.io/badge/Chrome-Extension-green)
![Manifest](https://img.shields.io/badge/Manifest-V3-orange)

## 📦 目录结构

```
chrome-extension/
├── manifest.json          # 扩展配置文件
├── icons/                 # 图标文件夹
│   ├── icon16.png        # 16x16 图标
│   ├── icon48.png        # 48x48 图标
│   ├── icon128.png       # 128x128 图标
│   └── ICON_GUIDE.md     # 图标制作指南
├── scripts/              # 脚本文件夹
│   ├── background.js     # 后台服务脚本
│   ├── content.js        # 内容脚本
│   └── content.css       # 样式文件
├── popup/                # 弹窗页面
│   ├── popup.html        # 弹窗HTML
│   ├── popup.css         # 弹窗样式
│   └── popup.js          # 弹窗脚本
├── options/              # 设置页面
│   ├── options.html      # 设置HTML
│   ├── options.css       # 设置样式
│   └── options.js        # 设置脚本
└── README.md             # 本文件
```

## ✨ 功能特性

### 与油猴版本相比的改进

✅ **更好的性能**
- 使用Chrome Extension API，性能更优
- Service Worker后台处理，不阻塞页面

✅ **更好的用户体验**
- 无需安装Tampermonkey
- 原生扩展，更稳定可靠
- 专属设置页面和弹窗

✅ **更强的功能**
- 右键菜单快速翻译
- 浏览器快捷键支持
- 配置同步到Chrome账户

✅ **更安全**
- Manifest V3 安全标准
- 明确的权限声明
- 沙箱隔离运行

### 核心功能

- 🎯 **选词翻译** - 选中文本自动弹出翻译面板
- ⌨️ **快捷键** - Alt+Q 快速翻译（可自定义）
- 🌐 **多引擎翻译** - Google、Bing、MyMemory 三大引擎
- 📺 **字幕翻译** - YouTube、Netflix 字幕自动翻译
- 🎨 **科技感UI** - 渐变色、毛玻璃效果、流光动画
- 📋 **一键复制** - 点击翻译结果复制到剪贴板
- ⚙️ **灵活配置** - 自定义语言、主题、快捷键

## 🚀 安装方法

### 方法一：开发者模式安装（推荐）

1. **下载扩展文件**
   ```bash
   # 确保 chrome-extension 文件夹完整
   cd weiruan-translation/chrome-extension
   ```

2. **准备图标文件**
   - 按照 `icons/ICON_GUIDE.md` 的说明创建图标
   - 或使用临时占位图标测试

3. **在Chrome中加载**
   - 打开Chrome浏览器
   - 访问 `chrome://extensions/`
   - 开启右上角"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择 `chrome-extension` 文件夹
   - 点击"选择文件夹"

4. **测试扩展**
   - 扩展图标会出现在工具栏
   - 访问任意网页测试选词翻译
   - 点击扩展图标打开设置

### 方法二：打包为.crx文件

1. **完成上述开发者模式安装**

2. **打包扩展**
   - 在 `chrome://extensions/` 页面
   - 点击"打包扩展程序"
   - 选择扩展根目录：`chrome-extension`
   - 点击"打包扩展程序"
   - 生成 `.crx` 文件

3. **分享安装**
   - 将生成的 `.crx` 文件分享给用户
   - 用户拖拽到 `chrome://extensions/` 安装
   - 或双击 `.crx` 文件安装

### 方法三：发布到Chrome Web Store（正式发布）

1. **注册开发者账号**
   - 访问 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
   - 支付一次性注册费（$5 USD）

2. **准备发布材料**
   - 扩展ZIP包（压缩 `chrome-extension` 文件夹）
   - 宣传图片（1280x800, 640x400）
   - 小图标（128x128 - 已有）
   - 详细描述和截图

3. **上传发布**
   - 上传ZIP包
   - 填写扩展信息
   - 添加截图和描述
   - 提交审核

4. **审核发布**
   - 等待Google审核（通常1-3天）
   - 审核通过后自动发布
   - 用户可在商店搜索安装

## 📝 使用说明

### 基本使用

1. **选词翻译**
   - 在任意网页选中文本
   - 翻译面板自动弹出
   - 查看多个翻译结果

2. **快捷键翻译**
   - 选中文本
   - 按 `Alt + Q`
   - 立即显示翻译

3. **右键翻译**
   - 选中文本后右键
   - 选择"翻译选中文本"
   - 弹出翻译面板

4. **字幕翻译**
   - 点击扩展图标
   - 开启"自动翻译视频字幕"
   - 观看视频时字幕自动翻译

### 高级设置

点击扩展图标 → "高级设置"，可以：

- 🌍 更改目标语言
- ⌨️ 查看快捷键设置
- 🎨 选择界面主题
- 📊 查看使用统计
- 💾 导出/导入配置

### 修改快捷键

1. 访问 `chrome://extensions/shortcuts`
2. 找到"微软科技 - 智能翻译助手"
3. 点击编辑图标
4. 设置新的快捷键组合
5. 保存即可生效

## 🔧 开发和调试

### 开发环境

```bash
# 进入扩展目录
cd chrome-extension

# 编辑文件后需要重新加载扩展
# 方法1: 在 chrome://extensions/ 点击刷新图标
# 方法2: 使用 Ctrl+R 重新加载
```

### 调试技巧

1. **调试Content Script**
   - 在网页上按 F12 打开开发者工具
   - Console中可以看到content.js的日志
   - Sources面板可以设置断点

2. **调试Background Script**
   - 在 `chrome://extensions/` 找到扩展
   - 点击"Service Worker"链接
   - 打开独立的开发者工具

3. **调试Popup**
   - 点击扩展图标打开popup
   - 右键popup窗口 → 检查
   - 打开popup专用的开发者工具

4. **调试Options页面**
   - 右键扩展图标 → 选项
   - 在选项页面按 F12
   - 像普通网页一样调试

### 常见问题

**Q: 扩展无法加载？**
A: 检查manifest.json格式是否正确，确保所有引用的文件都存在。

**Q: 图标不显示？**
A: 按照 `icons/ICON_GUIDE.md` 创建图标文件，或使用占位图片。

**Q: 翻译API调用失败？**
A: 检查 `host_permissions` 是否包含了翻译API的域名。

**Q: Content Script不生效？**
A: 重新加载扩展，刷新测试页面，查看控制台错误信息。

**Q: 配置保存失败？**
A: 确保manifest.json中声明了"storage"权限。

## 📋 权限说明

本扩展请求以下权限：

- `storage` - 保存用户配置和统计数据
- `activeTab` - 访问当前标签页内容进行翻译
- `contextMenus` - 添加右键菜单项
- `host_permissions` - 访问翻译API（Google、Bing、MyMemory）

所有权限仅用于实现翻译功能，不收集用户隐私数据。

## 🔄 版本对比

| 特性 | 油猴脚本 | Chrome扩展 |
|-----|---------|-----------|
| 安装方式 | 需要Tampermonkey | 直接安装 |
| 性能 | 较好 | 更优 |
| 稳定性 | 依赖TM | 更稳定 |
| 配置界面 | 简单 | 完整 |
| 快捷键 | 代码设置 | 原生支持 |
| 右键菜单 | ❌ | ✅ |
| 配置同步 | ❌ | ✅ |
| 更新方式 | 手动 | 自动（商店） |

## 🛠️ 技术栈

- **Manifest V3** - 最新Chrome扩展标准
- **Service Worker** - 后台任务处理
- **Chrome Storage API** - 配置持久化
- **Chrome Runtime API** - 消息通信
- **原生JavaScript** - 无框架依赖

## 📚 相关文档

- [Chrome扩展开发文档](https://developer.chrome.com/docs/extensions/)
- [Manifest V3迁移指南](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Web Store发布](https://developer.chrome.com/docs/webstore/publish/)

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 开发流程

1. Fork本项目
2. 创建功能分支
3. 修改 `chrome-extension/` 目录下的文件
4. 在Chrome中测试
5. 提交PR

### 代码规范

- 使用2空格缩进
- 添加必要的注释
- 遵循Chrome扩展最佳实践

## 📄 开源协议

MIT License

## 👨‍💻 关于作者

**微软科技** - 专注于开发实用的浏览器工具

## 💖 致谢

- 感谢使用本扩展的每一位用户
- 感谢所有贡献者的支持

---

<div align="center">

**Made with ❤️ by 微软科技**

[安装使用](#安装方法) | [功能特性](#功能特性) | [常见问题](#常见问题)

</div>
