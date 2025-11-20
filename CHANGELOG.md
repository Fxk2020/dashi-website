# 项目更新日志 / Project Changelog

## 功能总览 / Features Overview

本次更新为 Dashi Website 博客系统添加了多项重要功能，包括博客管理、国际化支持、主题切换等。

This update adds several important features to the Dashi Website blog system, including blog management, internationalization support, and theme switching.

---

## ✨ 新增功能 / New Features

### 1. 📅 博客按时间分组显示 / Blog Posts Grouped by Year

**功能说明 / Description:**
- 博客列表页面按年份分组显示文章（2024、2023等）
- 文章按发布日期降序排列
- 每篇文章显示日期、标题和标签

**实现位置 / Implementation:**
- `src/pages/blog/index.astro` (中文版)
- `src/pages/en/blog/index.astro` (英文版)

---

### 2. 🔍 博客搜索功能 / Blog Search Feature

**功能说明 / Description:**
- 实时搜索功能，无需刷新页面
- 支持搜索标题、描述和标签
- 自动隐藏没有匹配结果的年份分组

**使用方法 / How to Use:**
在博客页面顶部的搜索框输入关键词，结果会实时过滤显示。

Enter keywords in the search box at the top of the blog page, and results will be filtered in real-time.

---

### 3. 🏷️ 标签系统 / Tag System

**功能说明 / Description:**
- 为博客文章添加标签分类
- 标签云展示，显示所有标签及其文章数量
- 点击标签可以过滤相关文章
- 标签可以点击切换（再次点击取消过滤）

**如何添加标签 / How to Add Tags:**

在博客文章的 frontmatter 中添加 `tags` 字段：

```markdown
---
title: '文章标题'
description: '文章描述'
pubDate: 'Jan 01 2024'
heroImage: '../../assets/blog-placeholder-1.jpg'
tags: ['Kubernetes', 'DevOps', 'AI']
---

文章内容...
```

**实现位置 / Implementation:**
- `src/content.config.ts` - 标签字段定义
- `src/pages/blog/index.astro` - 标签云和过滤功能

---

### 4. 📦 项目展示页面 / Projects Page

**功能说明 / Description:**
- 展示外部开源项目
- 展示外部博客文章（Medium, Dev.to, HashNode等）
- 响应式卡片设计，美观的悬停效果
- 项目按年份分类，博客按平台分类

**如何添加项目 / How to Add Projects:**

编辑 `src/pages/projects.astro` 或 `src/pages/en/projects.astro`，修改以下数组：

```typescript
const externalProjects = [
	{
		title: '项目名称',
		description: '项目描述',
		url: 'https://github.com/username/project',
		tags: ['React', 'Node.js', 'TypeScript'],
		year: 2024,
	},
	// 添加更多项目...
];

const externalBlogs = [
	{
		title: '博客标题',
		description: '博客描述',
		url: 'https://medium.com/@username/article',
		platform: 'Medium',
		date: 'Jan 2024',
	},
	// 添加更多外部博客...
];
```

**实现位置 / Implementation:**
- `src/pages/projects.astro` (中文版)
- `src/pages/en/projects.astro` (英文版)

---

### 5. 🌍 国际化支持 / Internationalization

**功能说明 / Description:**
- 支持中文和英文两种语言
- 语言选择器位于导航栏右侧
- 默认语言为中文，英文页面使用 `/en/` 路径前缀

**语言配置 / Language Configuration:**
- 默认语言：中文 (zh)
- 支持语言：中文 (zh), 英文 (en)
- 配置文件：`src/i18n.ts`

**页面结构 / Page Structure:**
```
src/pages/
├── index.astro          # 中文首页
├── blog/
│   └── index.astro      # 中文博客列表
├── projects.astro       # 中文项目页面
└── en/
    ├── blog/
    │   └── index.astro  # 英文博客列表
    └── projects.astro   # 英文项目页面
```

**实现位置 / Implementation:**
- `src/i18n.ts` - 国际化配置
- `src/components/LanguagePicker.astro` - 语言选择器
- `astro.config.mjs` - Astro i18n 配置

---

### 6. 🎨 主题切换功能 / Theme Switcher

**功能说明 / Description:**
提供5种不同的主题皮肤：

1. **浅色主题 (Light)** - 默认主题，清新明亮
2. **深色主题 (Dark)** - 暗黑模式，护眼舒适
3. **海洋主题 (Ocean)** - 蓝色调，清爽宁静
4. **森林主题 (Forest)** - 绿色调，自然清新
5. **紫罗兰主题 (Violet)** - 紫色调，优雅神秘

**如何使用 / How to Use:**
点击导航栏右侧的 🎨 图标，选择您喜欢的主题。主题选择会自动保存到本地存储。

Click the 🎨 icon in the navigation bar and select your preferred theme. Theme selection is automatically saved to local storage.

**自定义主题 / Custom Themes:**

如需添加新主题，编辑 `src/styles/global.css`：

```css
/* 新主题名称 */
[data-theme="custom"] {
	--accent: #your-color;
	--accent-dark: #your-darker-color;
	--black: r, g, b;
	--gray: r, g, b;
	--gray-light: r, g, b;
	--gray-dark: r, g, b;
	--gray-gradient: rgba(r, g, b, 0.5), #bgcolor;
	--bg-color: #ffffff;
}

[data-theme="custom"] body {
	background: linear-gradient(to bottom, #color1 0%, #color2 100%);
}
```

然后在 `src/components/ThemePicker.astro` 中添加选项按钮。

**实现位置 / Implementation:**
- `src/styles/global.css` - 主题样式定义
- `src/components/ThemePicker.astro` - 主题选择器组件

---

## 📝 如何添加新内容 / How to Add New Content

### 添加新博客文章 / Add a New Blog Post

1. 在 `src/content/blog/` 目录下创建新的 `.md` 或 `.mdx` 文件

2. 添加 frontmatter：

```markdown
---
title: '文章标题'
description: '文章简介'
pubDate: 'Jan 15 2024'
updatedDate: 'Jan 20 2024'  # 可选
heroImage: '../../assets/your-image.jpg'  # 可选
tags: ['标签1', '标签2', '标签3']  # 可选
---

# 文章内容

这里是文章的正文内容...
```

3. 文件会自动被识别并显示在博客列表中

### 添加新标签 / Add New Tags

只需在博客文章的 frontmatter 中添加 `tags` 数组，标签会自动出现在标签云中。

### 添加新项目 / Add New Projects

编辑 `src/pages/projects.astro`，在 `externalProjects` 或 `externalBlogs` 数组中添加新项：

```typescript
// 添加项目
{
	title: '项目名称',
	description: '项目描述',
	url: 'https://github.com/...',
	tags: ['技术栈1', '技术栈2'],
	year: 2024,
}

// 添加外部博客
{
	title: '文章标题',
	description: '文章描述',
	url: 'https://...',
	platform: '平台名称',
	date: '发布日期',
}
```

---

## 🛠️ 技术栈 / Tech Stack

- **Astro** - 静态网站生成器
- **MDX** - Markdown 增强支持
- **TypeScript** - 类型安全
- **CSS Variables** - 主题系统
- **Zod** - 内容验证

---

## 📁 项目结构 / Project Structure

```
dashi-website/
├── src/
│   ├── assets/              # 图片资源
│   ├── components/          # 组件
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguagePicker.astro
│   │   ├── ThemePicker.astro
│   │   └── ...
│   ├── content/
│   │   └── blog/           # 博客文章 (Markdown)
│   ├── layouts/            # 布局模板
│   ├── pages/              # 页面路由
│   │   ├── blog/
│   │   ├── en/            # 英文版页面
│   │   ├── index.astro
│   │   └── projects.astro
│   ├── styles/
│   │   └── global.css     # 全局样式和主题
│   ├── consts.ts          # 常量配置
│   ├── content.config.ts  # 内容集合配置
│   └── i18n.ts            # 国际化配置
├── public/                # 静态资源
├── astro.config.mjs       # Astro 配置
└── package.json
```

---

## 🚀 开发指南 / Development Guide

### 启动开发服务器 / Start Dev Server

```bash
npm run dev
```

访问 http://localhost:4321

### 构建生产版本 / Build for Production

```bash
npm run build
```

### 预览生产构建 / Preview Production Build

```bash
npm run preview
```

---

## 🎯 配置文件说明 / Configuration Files

### `src/consts.ts`
网站基本信息配置：

```typescript
export const SITE_TITLE = '你的网站标题';
export const SITE_DESCRIPTION = '你的网站描述';
```

### `src/content.config.ts`
博客内容模型定义，包括标题、描述、日期、标签等字段验证。

### `src/i18n.ts`
国际化配置，定义支持的语言和翻译文本。

### `astro.config.mjs`
Astro 框架配置，包括：
- 网站URL
- i18n路由配置
- 插件集成（MDX, Sitemap等）

---

## 💡 最佳实践 / Best Practices

### 博客文章建议 / Blog Post Recommendations

1. **使用有意义的标签** - 选择准确描述文章主题的标签
2. **添加封面图** - 为文章添加合适的 heroImage 提升视觉效果
3. **保持一致的日期格式** - 使用统一的日期格式，如 'Jan 15 2024'
4. **定期更新** - 如果内容有更新，使用 `updatedDate` 字段

### 性能优化 / Performance Optimization

1. **图片优化** - 使用 Astro 的 Image 组件自动优化图片
2. **懒加载** - 图片和组件使用懒加载技术
3. **CSS 作用域** - 组件样式使用作用域限制，避免冲突
4. **静态生成** - 所有页面在构建时静态生成，加载速度快

---

## 🔄 更新历史 / Update History

### Version 2.0.0 (Current)

**新增 / Added:**
- ✅ 博客按年份分组显示
- ✅ 实时搜索功能
- ✅ 标签系统和标签云
- ✅ 项目展示页面
- ✅ 中英文国际化
- ✅ 5种主题皮肤
- ✅ 响应式设计优化

**改进 / Improved:**
- 📱 移动端适配优化
- 🎨 UI/UX 改进
- ⚡ 性能优化

---

## 📮 反馈与支持 / Feedback & Support

如有问题或建议，欢迎通过以下方式联系：
- GitHub Issues
- Email: your-email@example.com

---

## 📄 许可证 / License

MIT License - 详见 LICENSE 文件

---

**最后更新 / Last Updated:** 2024-11-13

**版本 / Version:** 2.0.0


