# 快速开始指南 / Quick Start Guide

## 📋 如何新增内容 / How to Add New Content

### 1. 新增博客文章 / Add a New Blog Post

**步骤 / Steps:**

1. 在 `src/content/blog/` 目录下创建新的 `.md` 文件
2. 添加以下 frontmatter 结构：

```markdown
---
title: '文章标题'
description: '文章简介，会显示在列表页'
pubDate: 'Jan 15 2024'
updatedDate: 'Jan 20 2024'  # 可选，更新日期
heroImage: '../../assets/your-image.jpg'  # 可选，封面图
tags: ['JavaScript', 'Web开发', 'React']  # 可选，标签
---

# 文章正文开始

这里写你的文章内容...

## 二级标题

更多内容...
```

**注意事项 / Notes:**
- 日期格式建议使用 'MMM DD YYYY' 格式（如 'Jan 15 2024'）
- 标签会自动出现在博客页面的标签云中
- heroImage 路径相对于当前 markdown 文件
- 文章会自动按日期排序并分组到对应年份

---

### 2. 新增外部项目 / Add External Projects

**文件位置 / File Location:**
- 中文版：`src/pages/projects.astro`
- 英文版：`src/pages/en/projects.astro`

**添加开源项目：**

```typescript
const externalProjects = [
	{
		title: '项目名称',
		description: '项目的简短描述，一两句话说明项目的主要功能',
		url: 'https://github.com/yourusername/project',
		tags: ['React', 'TypeScript', 'Node.js'],
		year: 2024,
	},
	// 在这里添加更多项目...
];
```

**添加外部博客文章：**

```typescript
const externalBlogs = [
	{
		title: '文章标题',
		description: '文章简介',
		url: 'https://medium.com/@username/article',
		platform: 'Medium',  // 或 'Dev.to', 'HashNode' 等
		date: 'Jan 2024',
	},
	// 在这里添加更多外部文章...
];
```

---

### 3. 修改网站基本信息 / Update Site Information

**文件位置 / File:** `src/consts.ts`

```typescript
export const SITE_TITLE = '你的网站标题';
export const SITE_DESCRIPTION = '你的网站描述';
```

这会影响：
- 网站标题栏显示
- SEO 元数据
- 导航栏品牌名称

---

### 4. 添加新的主题皮肤 / Add a New Theme

**步骤 / Steps:**

1. **在 `src/styles/global.css` 添加主题定义：**

```css
/* 自定义主题名称 */
[data-theme="custom"] {
	--accent: #ff6b6b;
	--accent-dark: #ee5a52;
	--black: 255, 87, 87;
	--gray: 156, 163, 175;
	--gray-light: 243, 244, 246;
	--gray-dark: 75, 85, 99;
	--gray-gradient: rgba(243, 244, 246, 0.5), #fff5f5;
	--bg-color: #fff5f5;
}

[data-theme="custom"] body {
	background: linear-gradient(to bottom, #fff5f5 0%, #ffe3e3 100%);
}
```

2. **在 `src/components/ThemePicker.astro` 添加选项：**

在 `theme-menu` 的 `<div>` 中添加新按钮：

```html
<button class="theme-option" data-theme="custom">
	<span class="theme-preview custom-preview"></span>
	<span>自定义 Custom</span>
</button>
```

3. **添加预览颜色样式：**

在 `<style>` 标签中添加：

```css
.custom-preview {
	background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
}
```

---

## 🎨 已有主题 / Available Themes

| 主题名称 | Theme Name | 特点 | Features |
|---------|------------|------|----------|
| 浅色 | Light | 默认主题，清爽明亮 | Default, clean and bright |
| 深色 | Dark | 暗黑模式，护眼舒适 | Dark mode, eye-friendly |
| 海洋 | Ocean | 蓝色调，清爽宁静 | Blue tones, calm and fresh |
| 森林 | Forest | 绿色调，自然清新 | Green tones, natural |
| 紫罗兰 | Violet | 紫色调，优雅神秘 | Purple tones, elegant |

---

## 🌍 国际化 / Internationalization

### 当前语言结构 / Current Language Structure

```
/                  # 中文首页 (默认)
/blog              # 中文博客列表
/projects          # 中文项目页面
/en/               # 英文首页
/en/blog           # 英文博客列表
/en/projects       # 英文项目页面
```

### 添加新的翻译文本 / Add New Translations

**文件位置 / File:** `src/i18n.ts`

在 `ui` 对象中添加新的翻译键值：

```typescript
export const ui = {
	en: {
		'nav.home': 'Home',
		'your.new.key': 'Your English Text',
		// ...
	},
	zh: {
		'nav.home': '首页',
		'your.new.key': '你的中文文本',
		// ...
	},
} as const;
```

### 在组件中使用翻译 / Use Translations in Components

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('your.new.key')}</h1>
```

---

## 📸 添加图片 / Add Images

### 博客文章图片

1. 将图片放在 `src/assets/` 目录
2. 在 markdown 中引用：

```markdown
---
heroImage: '../../assets/my-image.jpg'
---

![描述](../../assets/inline-image.jpg)
```

### 静态图片

放在 `public/` 目录，直接使用绝对路径：

```html
<img src="/favicon.svg" alt="Logo" />
```

---

## 🔧 常见问题 / FAQ

### Q: 如何修改导航栏链接？
**A:** 编辑 `src/components/Header.astro`，修改 `internal-links` 部分的 `<HeaderLink>` 组件。

### Q: 如何修改社交媒体链接？
**A:** 编辑 `src/components/Header.astro` 和 `src/components/Footer.astro` 中的 `social-links` 部分。

### Q: 博客文章的 URL 格式是什么？
**A:** 
- 中文：`/blog/{文件名}/`
- 英文：`/en/blog/{文件名}/`

### Q: 如何删除示例文章？
**A:** 直接删除 `src/content/blog/` 目录下不需要的 `.md` 文件。

### Q: 标签大小写敏感吗？
**A:** 是的，'JavaScript' 和 'javascript' 会被视为不同的标签。建议保持一致的命名规范。

### Q: 如何更改默认主题？
**A:** 编辑 `src/components/ThemePicker.astro`，修改以下行：
```javascript
const savedTheme = localStorage.getItem('theme') || 'light';  // 改为你想要的默认主题
```

### Q: 如何更改默认语言？
**A:** 编辑 `src/i18n.ts`，修改：
```typescript
export const defaultLang = 'zh';  // 改为 'en' 使用英文作为默认语言
```

同时修改 `astro.config.mjs`：
```javascript
i18n: {
	defaultLocale: 'zh',  // 改为 'en'
	// ...
}
```

---

## 🚀 部署 / Deployment

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录。

### 推荐的部署平台

- **Vercel** - 零配置部署
- **Netlify** - 简单易用
- **GitHub Pages** - 免费托管
- **Cloudflare Pages** - 全球 CDN

### 环境变量

在 `.env` 文件中设置（如果需要）：

```
SITE_URL=https://your-domain.com
```

---

## 📚 更多资源 / More Resources

- [完整更新日志 / Full Changelog](./CHANGELOG.md)
- [Astro 官方文档](https://docs.astro.build)
- [MDX 语法指南](https://mdxjs.com/)

---

**最后更新 / Last Updated:** 2024-11-13


