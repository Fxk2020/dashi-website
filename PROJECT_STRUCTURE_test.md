# Dashi Blog 项目结构详解 🏗️

这份文档详细解释了整个项目的架构、文件组织和代码逻辑，帮助你全面掌握项目结构。

---

## 📚 目录

- [整体架构](#整体架构)
- [目录结构详解](#目录结构详解)
- [核心文件说明](#核心文件说明)
- [路由系统](#路由系统)
- [组件体系](#组件体系)
- [样式系统](#样式系统)
- [内容管理](#内容管理)
- [数据流](#数据流)
- [配置文件](#配置文件)

---

## 🏛️ 整体架构

### 技术架构

```
┌─────────────────────────────────────────┐
│           Astro Framework               │
│  (Static Site Generation - SSG)         │
└─────────────────────────────────────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
    ┌───▼───┐  ┌───▼───┐  ┌───▼───┐
    │ Pages │  │Layout │  │Component│
    │ .astro│  │.astro │  │ .astro  │
    └───┬───┘  └───┬───┘  └───┬───┘
        │          │          │
        └──────────┼──────────┘
                   │
        ┌──────────▼──────────┐
        │  Content Collection │
        │   (Markdown/MDX)    │
        └─────────────────────┘
```

### 核心概念

1. **Astro Islands Architecture**: 默认无 JavaScript，按需加载
2. **File-based Routing**: 文件系统即路由系统
3. **Content Collections**: 类型安全的内容管理
4. **Component Islands**: 独立的交互式组件

---

## 📂 目录结构详解

### 完整目录树

```
dashi-website/
│
├── 📁 src/                          # 源代码目录
│   │
│   ├── 📁 assets/                   # 静态资源（会被 Astro 优化）
│   │   ├── logo.png                # 网站 Logo
│   │   ├── blog-placeholder-*.jpg  # 博客占位图
│   │   ├── article1/               # 文章1的图片
│   │   │   └── 1.png
│   │   └── projects/               # 项目图片目录
│   │
│   ├── 📁 components/              # 可复用组件
│   │   ├── BaseHead.astro          # SEO 元信息组件
│   │   ├── Header.astro            # 全局导航栏
│   │   ├── Footer.astro            # 全局页脚
│   │   ├── HeaderLink.astro        # 导航链接组件
│   │   ├── ThemePicker.astro       # 主题切换器
│   │   ├── LanguagePicker.astro    # 语言切换器
│   │   └── FormattedDate.astro     # 日期格式化组件
│   │
│   ├── 📁 content/                 # 内容集合（Astro Content Collections）
│   │   └── 📁 blog/                # 博客文章集合
│   │       ├── article1.md         # 文章1
│   │       ├── article2.md         # 文章2
│   │       ├── first-post.md
│   │       ├── markdown-style-guide.md
│   │       └── using-mdx.mdx       # 支持 MDX 格式
│   │
│   ├── 📁 layouts/                 # 页面布局模板
│   │   └── BlogPost.astro          # 博客文章布局
│   │
│   ├── 📁 pages/                   # 页面路由（核心目录）
│   │   ├── index.astro             # 首页 (/)
│   │   ├── projects.astro          # 项目页 (/projects)
│   │   ├── rss.xml.js              # RSS 订阅
│   │   │
│   │   ├── 📁 blog/                # 博客路由
│   │   │   ├── index.astro         # 博客列表 (/blog)
│   │   │   └── [...slug].astro     # 动态路由 (/blog/article-name)
│   │   │
│   │   └── 📁 en/                  # 英文版页面
│   │       ├── 📁 blog/
│   │       │   ├── index.astro     # 英文博客列表 (/en/blog)
│   │       │   └── [...slug].astro # 英文博客详情
│   │       └── projects.astro      # 英文项目页 (/en/projects)
│   │
│   ├── 📁 styles/                  # 样式文件
│   │   └── global.css              # 全局样式 + 主题变量
│   │
│   ├── 📄 consts.ts                # 网站常量配置
│   ├── 📄 content.config.ts        # 内容集合配置（Zod 验证）
│   └── 📄 i18n.ts                  # 国际化配置
│
├── 📁 public/                       # 公共静态文件（不经过处理）
│   ├── favicon.svg                 # 网站图标
│   └── 📁 fonts/                   # 字体文件
│       ├── atkinson-bold.woff
│       └── atkinson-regular.woff
│
├── 📄 astro.config.mjs             # Astro 配置文件
├── 📄 tsconfig.json                # TypeScript 配置
├── 📄 package.json                 # 项目依赖
├── 📄 README.md                    # 项目说明（中文）
├── 📄 README_EN.md                 # 项目说明（英文）
└── 📄 PROJECT_STRUCTURE.md         # 本文档
```

---

## 📄 核心文件说明

### 1. `src/pages/index.astro` - 首页 ⭐

**作用**: 网站首页，展示 Hero 区域、About Me 和最新文章

**结构**:
```astro
---
// Frontmatter（服务器端代码）
import { getCollection } from 'astro:content';
import Header from '../components/Header.astro';
// ... 其他导入

// 获取最新的 3 篇文章
const posts = (await getCollection('blog'))
	.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
	.slice(0, 3);
---

<!-- HTML 模板 -->
<html>
<head>
	<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
	<style>
		/* 页面样式（scoped） */
	</style>
</head>
<body>
	<Header />
	<main>
		<!-- Hero 区域 -->
		<section class="hero">
			<Image src={logoImage} />
			<h1>欢迎来到 Dashi Blog</h1>
			<!-- ... -->
		</section>

		<!-- About Me 区域 -->
		<section class="about-section">
			<!-- ... -->
		</section>

		<!-- 最新文章区域 -->
		<section class="recent-posts">
			{posts.map((post) => (
				<article class="post-card">
					<!-- ... -->
				</article>
			))}
		</section>
	</main>
	<Footer />
</body>
</html>
```

**关键点**:
- 使用 `getCollection('blog')` 获取所有博客文章
- 按发布日期排序并取前 3 篇
- Logo 使用 `transform: scale(1.5)` 实现小容器大图标
- 所有样式都是 scoped（仅作用于当前组件）

---

### 2. `src/pages/blog/index.astro` - 博客列表

**作用**: 显示所有博客文章，支持搜索和标签过滤

**核心功能**:
```typescript
// 获取所有文章
const posts = (await getCollection('blog')).sort(
	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

// 提取所有唯一标签
const allTags = [...new Set(posts.flatMap((post) => post.data.tags || []))];

// 按年份分组
const postsByYear = posts.reduce((acc, post) => {
	const year = new Date(post.data.pubDate).getFullYear();
	if (!acc[year]) acc[year] = [];
	acc[year].push(post);
	return acc;
}, {});
```

**特点**:
- 实时搜索功能（客户端 JavaScript）
- 标签云过滤
- 按年份分组显示

---

### 3. `src/pages/blog/[...slug].astro` - 博客详情

**作用**: 动态路由，显示单篇博客文章

**核心逻辑**:
```typescript
// 生成所有静态路径
export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.map((post) => ({
		params: { slug: post.slug },
		props: post,
	}));
}

// 获取当前文章
const post = Astro.props;
const { Content } = await post.render();
```

**特点**:
- `[...slug]` 支持嵌套路径
- 使用 `BlogPost` 布局
- 自动渲染 Markdown 内容

---

### 4. `src/components/Header.astro` - 导航栏 ⭐

**作用**: 全局导航栏，粘性定位，毛玻璃效果

**结构**:
```astro
---
import { SITE_TITLE } from '../consts';
import HeaderLink from './HeaderLink.astro';
import ThemePicker from './ThemePicker.astro';
import LanguagePicker from './LanguagePicker.astro';
import logoImage from '../assets/logo.png';
---

<header>
	<nav>
		<!-- Logo + 站点名 -->
		<h2>
			<a href="/" class="logo-link">
				<Image src={logoImage} />
				<span>{SITE_TITLE}</span>
			</a>
		</h2>

		<!-- 导航链接 -->
		<div class="internal-links">
			<HeaderLink href="/">Home</HeaderLink>
			<HeaderLink href="/blog">Blogs</HeaderLink>
			<HeaderLink href="/projects">Projects</HeaderLink>
		</div>

		<!-- 控制按钮 -->
		<div class="nav-controls">
			<a href="https://github.com/Fxk2020">GitHub</a>
			<ThemePicker />
			<LanguagePicker />
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(10px);  /* 毛玻璃效果 */
		background: rgba(255, 255, 255, 0.95);
	}
	/* ... */
</style>
```

**关键样式**:
- `position: sticky` - 滚动时固定在顶部
- `backdrop-filter: blur(10px)` - 毛玻璃背景模糊
- `z-index: 100` - 确保在其他内容之上

---

### 5. `src/components/ThemePicker.astro` - 主题切换器

**作用**: 切换 5 种主题（Light, Dark, Ocean, Forest, Violet）

**核心逻辑**:
```astro
<div class="theme-picker">
	<button data-theme="light">🌞</button>
	<button data-theme="dark">🌙</button>
	<button data-theme="ocean">🌊</button>
	<button data-theme="forest">🌲</button>
	<button data-theme="violet">💜</button>
</div>

<script>
	// 客户端 JavaScript
	const buttons = document.querySelectorAll('[data-theme]');
	
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const theme = button.dataset.theme;
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		});
	});

	// 页面加载时恢复主题
	const savedTheme = localStorage.getItem('theme') || 'light';
	document.documentElement.setAttribute('data-theme', savedTheme);
</script>
```

**特点**:
- 使用 `data-theme` 属性控制主题
- `localStorage` 持久化存储
- 页面加载时自动恢复

---

### 6. `src/content/blog/` - 博客内容 ⭐

**作用**: 存放所有博客文章的 Markdown/MDX 文件

**文章格式**:
```markdown
---
title: '文章标题'
description: '文章简介'
pubDate: 'Jan 20 2024'
heroImage: '../../assets/article1/1.png'
tags: ['JavaScript', 'React']
---

# 正文开始

这是文章内容...

## 二级标题

更多内容...
```

**Frontmatter 字段说明**:
- `title`: 文章标题（必需）
- `description`: 简短描述（必需）
- `pubDate`: 发布日期（必需）
- `heroImage`: 特色图片（可选）
- `tags`: 标签数组（可选）

---

### 7. `src/styles/global.css` - 全局样式 ⭐

**作用**: 定义全局样式、CSS 变量、主题

**结构**:
```css
/* ========== CSS Reset ========== */
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

/* ========== CSS Variables ========== */
:root {
	--accent: #2563eb;
	--accent-dark: #1e40af;
	--black: 15, 18, 25;
	--gray: 96, 115, 159;
	/* ... */
}

/* ========== 主题定义 ========== */
[data-theme="light"] {
	--accent: #2563eb;
	--accent-dark: #1e40af;
}

[data-theme="dark"] {
	--accent: #60a5fa;
	--accent-dark: #3b82f6;
	background: #1a1a1a;
	color: #e5e5e5;
}

[data-theme="ocean"] {
	--accent: #0ea5e9;
	--accent-dark: #0284c7;
}

[data-theme="forest"] {
	--accent: #10b981;
	--accent-dark: #059669;
}

[data-theme="violet"] {
	--accent: #8b5cf6;
	--accent-dark: #7c3aed;
}

/* ========== 全局元素样式 ========== */
body {
	font-family: sans-serif;
	background: white;
	color: rgb(var(--black));
}

/* ... */
```

**特点**:
- 使用 CSS 变量实现主题切换
- RGB 格式（如 `rgb(var(--black))`）方便添加透明度
- 所有主题共享相同的变量名

---

### 8. `src/consts.ts` - 配置常量

**作用**: 存放网站的基本配置信息

```typescript
// 网站标题
export const SITE_TITLE = 'Dashi Blog';

// 网站描述
export const SITE_DESCRIPTION = 'Welcome to my website!';
```

**用途**:
- 在多个组件中使用一致的网站信息
- 便于统一修改

---

### 9. `src/content.config.ts` - 内容验证

**作用**: 定义内容集合的结构和验证规则

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
```

**特点**:
- 使用 Zod 进行类型验证
- 构建时检查所有文章的 frontmatter
- 提供 TypeScript 类型提示

---

### 10. `astro.config.mjs` - Astro 配置

**作用**: Astro 框架的配置文件

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
```

**配置项说明**:
- `site`: 网站 URL（用于生成 sitemap 和 RSS）
- `integrations`: 集成的插件
  - `mdx()`: 支持 MDX 格式
  - `sitemap()`: 自动生成站点地图

---

## 🛣️ 路由系统

### 文件路由映射

Astro 使用基于文件的路由系统：

```
文件路径                           →  URL 路径
─────────────────────────────────────────────────
src/pages/index.astro             →  /
src/pages/projects.astro          →  /projects
src/pages/blog/index.astro        →  /blog
src/pages/blog/[...slug].astro    →  /blog/article-name
src/pages/en/blog/index.astro     →  /en/blog
src/pages/rss.xml.js              →  /rss.xml
```

### 动态路由

**[...slug].astro** - 捕获所有路由

```typescript
// 必须导出 getStaticPaths
export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.map((post) => ({
		params: { slug: post.slug },  // URL 参数
		props: post,                   // 传递给页面的数据
	}));
}

// 在页面中访问
const post = Astro.props;
```

---

## 🧩 组件体系

### 组件层级关系

```
Pages (页面)
  ├─ BaseHead (SEO)
  ├─ Header (导航)
  │   ├─ HeaderLink (链接)
  │   ├─ ThemePicker (主题)
  │   └─ LanguagePicker (语言)
  ├─ Main Content (主内容)
  │   ├─ Image (图片)
  │   └─ FormattedDate (日期)
  └─ Footer (页脚)
```

### 组件类型

1. **布局组件** (`layouts/`)
   - 提供页面骨架
   - 包含 SEO、导航、页脚
   - 例: `BlogPost.astro`

2. **功能组件** (`components/`)
   - 独立功能单元
   - 可在多个页面复用
   - 例: `Header.astro`, `ThemePicker.astro`

3. **页面组件** (`pages/`)
   - 直接对应 URL 路由
   - 组合其他组件构成完整页面

### 组件通信

**Props 传递**:
```astro
<!-- 父组件 -->
<HeaderLink href="/blog">Blogs</HeaderLink>

<!-- 子组件 HeaderLink.astro -->
---
const { href } = Astro.props;
---
<a href={href} class={Astro.url.pathname === href ? 'active' : ''}>
	<slot />
</a>
```

**Slots**:
```astro
<!-- 使用 slot 插入内容 -->
<HeaderLink href="/blog">Blogs</HeaderLink>

<!-- 在组件内 -->
<a><slot /></a>
```

---

## 🎨 样式系统

### 样式组织

```
样式层级:
├─ global.css          (全局样式 + 主题变量)
├─ Component Styles    (组件内 <style> 标签 - scoped)
└─ Inline Styles       (特殊情况使用)
```

### Scoped 样式

每个 `.astro` 文件的 `<style>` 标签默认是 scoped：

```astro
<div class="card">Content</div>

<style>
	.card {
		/* 只作用于当前组件的 .card */
		padding: 1rem;
	}
</style>
```

### 全局样式

```astro
<style is:global>
	/* 全局样式 */
	.card {
		/* 作用于所有 .card */
	}
</style>
```

或使用 `:global()`:

```astro
<style>
	:global(.card) {
		/* 全局样式 */
	}
</style>
```

---

## 📦 内容管理

### Content Collections 工作流

```
1. 创建内容
   ↓
   src/content/blog/new-post.md

2. 定义 Schema
   ↓
   src/content.config.ts (Zod 验证)

3. 查询内容
   ↓
   getCollection('blog')

4. 渲染内容
   ↓
   const { Content } = await post.render()
```

### 内容查询 API

```typescript
// 获取所有文章
const posts = await getCollection('blog');

// 过滤文章
const draftPosts = await getCollection('blog', ({ data }) => {
	return data.draft === true;
});

// 获取单篇文章
const post = await getEntry('blog', 'article-slug');

// 渲染内容
const { Content } = await post.render();
```

---

## 🔄 数据流

### 构建时数据流

```
Content Collections (Markdown)
        ↓
  Zod Validation (content.config.ts)
        ↓
  getCollection() / getEntry()
        ↓
  Astro Component (Frontmatter)
        ↓
  Static HTML Generation
        ↓
  dist/ (产物)
```

### 运行时数据流

```
User Interaction (浏览器)
        ↓
  Client Script (<script> 标签)
        ↓
  DOM Manipulation
        ↓
  localStorage / Theme State
```

---

## ⚙️ 配置文件

### package.json

```json
{
  "scripts": {
    "dev": "astro dev",        // 开发服务器
    "build": "astro build",    // 构建生产版本
    "preview": "astro preview" // 预览构建结果
  },
  "dependencies": {
    "@astrojs/mdx": "^4.3.10",      // MDX 支持
    "@astrojs/rss": "^4.0.13",      // RSS 生成
    "@astrojs/sitemap": "^3.6.0",   // 站点地图
    "astro": "^5.15.5",             // Astro 核心
    "sharp": "^0.34.3"              // 图片优化
  }
}
```

### tsconfig.json

```json
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

---

## 🔍 关键概念

### 1. Astro Islands

Astro 默认生成零 JavaScript 的 HTML，只在需要时加载 JS：

```astro
<!-- 默认：无 JavaScript -->
<MyComponent />

<!-- 需要交互：添加 client 指令 -->
<ThemePicker client:load />
```

### 2. Frontmatter vs Template

```astro
---
// Frontmatter（服务器端代码）
// 构建时执行，可以访问文件系统、数据库等
const posts = await getCollection('blog');
---

<!-- Template（HTML 模板） -->
<!-- 生成静态 HTML -->
<div>{posts.length} posts</div>

<script>
	// 客户端代码
	// 运行在浏览器中
	console.log('Page loaded');
</script>
```

### 3. 图片优化

```astro
// 自动优化（推荐）
import { Image } from 'astro:assets';
import logo from '../assets/logo.png';

<Image src={logo} alt="Logo" width={100} height={100} />

// 不优化（public 目录）
<img src="/favicon.svg" alt="Icon" />
```

---

## 📝 最佳实践

### 1. 组件组织

- **单一职责**: 每个组件只负责一个功能
- **可复用性**: 通过 props 和 slots 提高复用性
- **样式隔离**: 使用 scoped 样式避免冲突

### 2. 内容管理

- **统一格式**: 所有文章使用相同的 frontmatter 结构
- **类型安全**: 使用 Zod schema 验证
- **图片组织**: 相关图片放在同一文件夹

### 3. 性能优化

- **图片优化**: 使用 Astro Image 组件
- **代码分割**: 按需加载 JavaScript
- **CSS 优化**: 避免未使用的样式

---

## 🚀 开发流程

### 添加新页面

1. 在 `src/pages/` 创建 `.astro` 文件
2. 定义页面内容和样式
3. 从 `src/components/` 导入所需组件
4. 自动生成对应路由

### 添加新组件

1. 在 `src/components/` 创建 `.astro` 文件
2. 定义组件 props 和内容
3. 添加 scoped 样式
4. 在需要的页面中导入使用

### 修改主题

1. 编辑 `src/styles/global.css`
2. 添加或修改 `[data-theme="name"]` 规则
3. 在 `ThemePicker.astro` 添加按钮

---

## 📚 相关文档

- [Astro 官方文档](https://docs.astro.build)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Routing](https://docs.astro.build/en/core-concepts/routing/)
- [Components](https://docs.astro.build/en/core-concepts/astro-components/)

---

**最后更新**: 2024-11-20  
**作者**: Dashi Team




