# 图标指南

## 图标要求

Chrome扩展需要以下尺寸的图标：
- **icon16.png** - 16x16像素（扩展栏图标）
- **icon48.png** - 48x48像素（扩展管理页面）
- **icon128.png** - 128x128像素（Chrome Web Store）

## 设计方案

### 主题
- **元素**: 闪电⚡ + 翻译图标🌐
- **配色**: 科技蓝渐变（#667eea → #00d9ff）
- **风格**: 现代、科技感

## SVG图标模板

将以下SVG保存为 `icon.svg`，然后使用在线工具或设计软件转换为所需尺寸的PNG：

```svg
<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景渐变 -->
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00d9ff;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- 圆形背景 -->
  <circle cx="64" cy="64" r="56" fill="url(#grad1)"/>

  <!-- 翻译图标 -->
  <g transform="translate(64, 64)">
    <!-- 地球 -->
    <circle cx="0" cy="0" r="32" fill="none" stroke="white" stroke-width="3"/>
    <ellipse cx="0" cy="0" rx="12" ry="32" fill="none" stroke="white" stroke-width="2.5"/>
    <line x1="-32" y1="0" x2="32" y2="0" stroke="white" stroke-width="2.5"/>

    <!-- 闪电 -->
    <path d="M 8,-20 L 12,-8 L 6,-8 L 10,8 L 2,-4 L 8,-4 Z"
          fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </g>
</svg>
```

## 在线转换工具

使用以下在线工具将SVG转换为PNG：

1. **CloudConvert** - https://cloudconvert.com/svg-to-png
2. **Convertio** - https://convertio.co/svg-png/
3. **SVG to PNG** - https://svgtopng.com/

### 转换步骤

1. 将上面的SVG代码保存为 `icon.svg` 文件
2. 访问转换网站
3. 上传SVG文件
4. 分别设置输出尺寸为 128x128, 48x48, 16x16
5. 下载转换后的PNG文件
6. 重命名为 `icon128.png`, `icon48.png`, `icon16.png`
7. 将文件放入 `chrome-extension/icons/` 目录

## 使用设计软件

### Figma
1. 创建新文件
2. 创建 128x128 画布
3. 绘制渐变圆形背景（#667eea → #00d9ff）
4. 添加白色翻译/地球图标
5. 添加金色闪电
6. 导出为PNG（128px, 48px, 16px）

### Adobe Illustrator
1. 新建文档 128x128px
2. 使用渐变工具创建背景
3. 添加图标元素
4. 导出为PNG多个尺寸

## 简易方案

如果没有设计工具，可以使用以下Emoji组合：

创建一个简单的背景图，在中心位置放置：
- 主元素：🌐 或 🔤
- 辅助元素：⚡

## 临时解决方案

在开发测试期间，可以使用纯色占位图标：

1. 访问 https://placeholder.com/
2. 生成以下尺寸的图片：
   - 128x128: https://via.placeholder.com/128/667eea/ffffff?text=W
   - 48x48: https://via.placeholder.com/48/667eea/ffffff?text=W
   - 16x16: https://via.placeholder.com/16/667eea/ffffff?text=W
3. 下载并重命名

---

**注意**: 正式发布前请使用专业设计的图标，以提供更好的用户体验。

**署名**: 微软科技
