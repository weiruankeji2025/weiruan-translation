# Chrome浏览器扩展版 - 安装指南

> 🎉 微软科技 - 智能翻译助手现已支持Chrome扩展版本！

## 🆚 两个版本对比

### 油猴脚本版 (weiruan-translator.user.js)

**优点:**
- ✅ 安装简单，适合技术用户
- ✅ 可以随时编辑代码
- ✅ 支持所有支持Tampermonkey的浏览器
- ✅ 更新灵活

**缺点:**
- ❌ 需要先安装Tampermonkey扩展
- ❌ 多一层依赖关系
- ❌ 普通用户可能觉得复杂

**适合人群:**
- 已经在使用Tampermonkey的用户
- 喜欢自定义脚本的技术用户
- Firefox、Safari等非Chrome浏览器用户

---

### Chrome扩展版 (chrome-extension/)

**优点:**
- ✅ 无需Tampermonkey，直接安装
- ✅ 原生扩展，性能更好
- ✅ 有专门的设置页面和弹窗
- ✅ 支持右键菜单和原生快捷键
- ✅ 配置可同步到Chrome账户
- ✅ 可以发布到Chrome应用商店

**缺点:**
- ❌ 仅支持Chrome/Edge等Chromium浏览器
- ❌ 需要开发者模式加载（未发布前）
- ❌ 修改代码需要重新加载扩展

**适合人群:**
- Chrome/Edge浏览器用户
- 不想安装Tampermonkey的普通用户
- 需要配置同步功能的用户
- 企业内部部署使用

---

## 📦 Chrome扩展快速安装

### 第一步：准备图标文件

扩展需要3个尺寸的图标。可以选择以下方法之一：

#### 方法A：使用在线工具生成（推荐）

1. 访问 https://via.placeholder.com/
2. 下载以下图片并重命名：
   ```
   https://via.placeholder.com/128/667eea/ffffff?text=T
   → 保存为: chrome-extension/icons/icon128.png

   https://via.placeholder.com/48/667eea/ffffff?text=T
   → 保存为: chrome-extension/icons/icon48.png

   https://via.placeholder.com/16/667eea/ffffff?text=T
   → 保存为: chrome-extension/icons/icon16.png
   ```

#### 方法B：使用SVG转换

按照 `chrome-extension/icons/ICON_GUIDE.md` 的说明，使用在线工具将SVG转换为PNG。

#### 方法C：使用现有图片

如果有设计师，可以设计专业的图标，确保符合尺寸要求。

### 第二步：加载扩展

1. **打开Chrome扩展管理页面**
   ```
   地址栏输入: chrome://extensions/
   或点击: 菜单 → 更多工具 → 扩展程序
   ```

2. **开启开发者模式**
   - 页面右上角，打开"开发者模式"开关

3. **加载扩展**
   - 点击"加载已解压的扩展程序"
   - 选择项目中的 `chrome-extension` 文件夹
   - 点击"选择文件夹"

4. **确认安装**
   - 扩展图标出现在工具栏
   - 状态显示"已启用"

### 第三步：测试功能

1. **打开测试页面**
   - 点击扩展图标
   - 点击"测试页面"按钮
   - 或直接访问任意网页

2. **测试选词翻译**
   - 选中网页上的任意英文文本
   - 翻译面板自动弹出
   - 查看多个翻译结果

3. **测试快捷键**
   - 选中文本
   - 按 `Alt + Q`
   - 翻译面板立即显示

4. **测试右键菜单**
   - 选中文本后右键
   - 点击"翻译选中文本"
   - 查看翻译结果

5. **测试字幕翻译**
   - 点击扩展图标
   - 开启"自动翻译视频字幕"
   - 在YouTube观看带字幕视频
   - 字幕下方显示中文翻译

## ⚙️ 配置和使用

### 基本设置（弹窗）

点击扩展图标可以快速访问：
- 开启/关闭翻译功能
- 更改目标语言
- 切换字幕翻译
- 查看使用提示

### 高级设置（设置页面）

右键扩展图标 → 选项，或在弹窗中点击"高级设置"：
- 自定义快捷键指引
- 选择界面主题配色
- 查看使用统计数据
- 导出/导入配置
- 了解扩展信息

### 自定义快捷键

1. 访问 `chrome://extensions/shortcuts`
2. 找到"微软科技 - 智能翻译助手"
3. 点击编辑按钮
4. 输入新的快捷键组合（如 Ctrl+T）
5. 保存即可生效

## 🔧 故障排除

### 扩展无法加载

**症状**: 点击"加载已解压的扩展程序"后报错

**解决方案:**
1. 检查是否选择了正确的文件夹（`chrome-extension`）
2. 确认 `manifest.json` 文件存在
3. 确认图标文件已创建（icon16.png, icon48.png, icon128.png）
4. 查看错误信息，修复JSON格式错误

### 翻译面板不显示

**症状**: 选中文本后没有反应

**解决方案:**
1. 重新加载扩展（在chrome://extensions/点击刷新）
2. 刷新测试页面（F5）
3. 查看控制台是否有错误（F12）
4. 确认扩展状态为"已启用"

### 快捷键不工作

**症状**: 按Alt+Q没有反应

**解决方案:**
1. 访问 `chrome://extensions/shortcuts`
2. 检查快捷键是否被其他扩展占用
3. 尝试设置不同的快捷键组合
4. 确保页面已完全加载

### 翻译API请求失败

**症状**: 显示"翻译失败"

**解决方案:**
1. 检查网络连接
2. 确认manifest.json中的host_permissions正确
3. 查看background service worker的日志
4. 尝试刷新页面重试

### 配置无法保存

**症状**: 设置后刷新又恢复默认

**解决方案:**
1. 确认manifest.json声明了"storage"权限
2. 检查Chrome是否启用了同步功能
3. 清除浏览器缓存重试
4. 查看控制台错误信息

## 📱 移动端使用

### Kiwi Browser (Android)

Kiwi Browser支持Chrome扩展：

1. 在Google Play下载Kiwi Browser
2. 打开Kiwi设置 → Extensions
3. 开启Developer mode
4. 加载chrome-extension文件夹
5. 即可在手机上使用

### iOS设备

由于iOS限制，暂不支持。建议使用油猴脚本版配合Userscripts。

## 🚀 高级功能

### 打包为.crx文件分享

1. 在 `chrome://extensions/` 页面
2. 点击"打包扩展程序"
3. 扩展根目录: 选择 `chrome-extension` 文件夹
4. 私有密钥文件: 首次打包留空
5. 点击"打包扩展程序"
6. 生成两个文件:
   - `.crx` - 扩展安装包
   - `.pem` - 私钥（请妥善保管）
7. 分享.crx文件给他人安装

### 企业部署

如果要在公司内部部署：

1. 准备好chrome-extension文件夹
2. 压缩为ZIP文件
3. 通过企业策略推送：
   - Google Workspace Admin Console
   - ExtensionInstallForcelist 策略
   - 指向内部服务器的ZIP文件

详见：https://support.google.com/chrome/a/answer/9296680

### 发布到Chrome Web Store

如要公开发布：

1. 注册Chrome Web Store开发者账号（$5）
2. 压缩chrome-extension文件夹
3. 上传到开发者控制台
4. 填写商店信息和截图
5. 提交审核（1-3天）
6. 审核通过后自动发布

## 📊 两个版本功能对比表

| 功能 | 油猴脚本 | Chrome扩展 |
|-----|---------|-----------|
| 选词翻译 | ✅ | ✅ |
| 快捷键 | ✅ | ✅ (原生) |
| 多引擎翻译 | ✅ | ✅ |
| 字幕翻译 | ✅ | ✅ |
| 科技感UI | ✅ | ✅ |
| 右键菜单 | ❌ | ✅ |
| 弹窗界面 | ❌ | ✅ |
| 设置页面 | 简单 | 完整 |
| 配置同步 | ❌ | ✅ |
| 统计功能 | ❌ | ✅ |
| 主题选择 | ❌ | ✅ |
| 安装方式 | 需TM | 直接 |
| 浏览器支持 | 全部 | Chrome系 |
| 性能 | 好 | 更好 |

## 🎯 推荐使用场景

### 使用油猴脚本版，如果你：
- 使用Firefox、Safari或其他非Chrome浏览器
- 已经在使用Tampermonkey管理脚本
- 喜欢自己修改代码
- 需要跨浏览器同步脚本

### 使用Chrome扩展版，如果你：
- 使用Chrome、Edge或其他Chromium浏览器
- 希望获得最佳性能和体验
- 不想安装Tampermonkey
- 需要配置同步到Cloud
- 在企业环境使用
- 准备分享给非技术用户

## 💡 小贴士

1. **两个版本可以同时安装**，但建议只启用其中一个，避免冲突

2. **迁移配置**: 油猴版的配置存在Tampermonkey，扩展版的配置存在Chrome Storage，无法自动迁移

3. **性能对比**: 扩展版使用Service Worker，在资源占用和响应速度上优于油猴版

4. **更新方式**:
   - 油猴版: 手动更新脚本文件
   - 扩展版 (开发者模式): 替换文件后重新加载
   - 扩展版 (商店): 自动更新

5. **隐私保护**: 两个版本都是本地运行，不收集数据，扩展版的配置同步使用Chrome自带的同步功能

## 🆘 获取帮助

遇到问题？

1. 查看本文档的[故障排除](#故障排除)部分
2. 阅读 `chrome-extension/README.md` 详细文档
3. 查看控制台错误信息（F12）
4. 提交GitHub Issue

---

<div align="center">

Made with ❤️ by **微软科技**

[返回主页](../README.md) | [油猴版说明](../README.md) | [Chrome扩展详细文档](chrome-extension/README.md)

</div>
