# Dashi Blog 🏔️

A modern personal blog website built with Astro framework, featuring bilingual support, multiple themes, beautiful visual design, and smooth user experience.

![Version](https://img.shields.io/badge/version-2.1.0-blue)
![Astro](https://img.shields.io/badge/Astro-5.15.5-orange)
![License](https://img.shields.io/badge/license-MIT-green)

[English](./README_EN.md) | [中文文档](./README.md)

---

## 📖 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Design Guide](#-design-guide)
- [Content Management](#-content-management)
- [Customization](#-customization)
- [Maintenance Guide](#-maintenance-guide)
- [Tech Stack](#-tech-stack)

---

## ✨ Features

### Core Features
- 📝 **Blog System** - Markdown/MDX support, grouped by year
- 🔍 **Real-time Search** - Full-text search for titles, descriptions, and tags
- 🏷️ **Tag Cloud** - Smart tag filtering and categorization
- 📦 **Project Showcase** - Display personal projects and works
- 👤 **About Me** - Personal introduction and skills showcase

### Internationalization & Themes
- 🌍 **Bilingual Support** - Full Chinese/English localization
- 🎨 **5 Themes** - Light, Dark, Ocean, Forest, Violet
- 📱 **Responsive Design** - Perfect for desktop, tablet, and mobile
- 🎭 **Smooth Animations** - Carefully designed transitions and interactions

### Performance Optimization
- ⚡ **Static Generation** - Astro SSG for ultimate performance
- 🖼️ **Image Optimization** - Auto optimization and lazy loading
- 🔄 **Sticky Navigation** - Fixed navigation bar with frosted glass effect
- 🎯 **SEO Optimized** - Complete meta tags and sitemap

---

## 🚀 Quick Start

### Requirements

- Node.js >= 18.0.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/dashi-website.git
cd dashi-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:4321 to view the website

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
dashi-website/
├── src/
│   ├── assets/              # Static assets
│   │   ├── logo.png         # Website logo
│   │   └── blog-*.jpg       # Blog images
│   │
│   ├── components/          # Reusable components
│   │   ├── BaseHead.astro   # SEO head component
│   │   ├── Header.astro     # Navigation bar (sticky, frosted glass)
│   │   ├── Footer.astro     # Footer
│   │   ├── ThemePicker.astro    # Theme switcher
│   │   ├── LanguagePicker.astro # Language switcher
│   │   └── FormattedDate.astro  # Date formatter
│   │
│   ├── content/             # Content collections
│   │   └── blog/           # Blog posts (.md/.mdx)
│   │       ├── article1.md
│   │       ├── article2.md
│   │       └── ...
│   │
│   ├── layouts/            # Page layouts
│   │   └── BlogPost.astro  # Blog post layout
│   │
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Homepage (Hero + About + Latest posts)
│   │   ├── projects.astro  # Projects showcase
│   │   ├── blog/           # Blog pages
│   │   │   ├── index.astro     # Blog list
│   │   │   └── [...slug].astro # Blog detail
│   │   ├── en/             # English version pages
│   │   └── rss.xml.js      # RSS feed
│   │
│   ├── styles/             # Stylesheets
│   │   └── global.css      # Global styles and theme variables
│   │
│   ├── consts.ts           # Site configuration constants
│   ├── content.config.ts   # Content collection config
│   └── i18n.ts             # Internationalization config
│
├── public/                 # Public static files
│   ├── favicon.svg
│   └── fonts/
│
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

---

## 🎨 Design Guide

### Homepage Layout

The homepage adopts a compact and refined design style with the following sections:

#### 1. Hero Section
- **Logo Display**
  - Circular container: 80px × 80px
  - Internal scaling: scale(1.5), actual display ~120px
  - Float animation: 6-second loop with gentle vertical float and rotation
  - Hover effect: Scale up + rotate
  - Multi-layer shadows: Blue-green gradient glow effect

- **Title Area**
  - Main title: 1.75rem, gradient color (blue → green)
  - Subtitle: 0.95rem, gray
  - Description: 0.875rem, dark gray
  - Fade-in-up animation

- **Action Buttons**
  - Two buttons: Browse Blog (primary), View Projects (secondary)
  - Gradient background + hover effects
  - Internal shimmer animation

#### 2. About Me Section
- White card with 12px border radius
- Personal introduction + skill tags
- Skill tags with blue gradient background
- Hover effect: tags float up

#### 3. Latest Posts Section
- Grid layout, adaptive columns
- Each post includes:
  - Featured image (160px height)
  - Publication date
  - Title
  - Description
  - Tag list
- Card floats up slightly on hover

### Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 768px) {
  - Logo: 65px
  - Title: 1.5rem
  - Single column layout
}

/* Mobile */
@media (max-width: 480px) {
  - Logo: 60px
  - Title: 1.4rem
  - Further reduced spacing
}
```

### Color System

Theme switching implemented with CSS variables:

```css
--accent: Theme color
--accent-dark: Darker theme color
--black: Black text
--gray: Gray text
--gray-dark: Dark gray text
--gray-light: Light gray border/background
```

### Animation Effects

- **Float Animation**: Logo gently floats up and down
- **Fade-in Animation**: Progressive appearance of page elements
- **Hover Effects**: Interactive feedback for buttons, cards, and icons
- **Page Transitions**: Smooth route changes

---

## 📝 Content Management

### Adding Blog Posts

Create a new `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: 'Post Title'
description: 'Post description'
pubDate: 'Jan 20 2024'
heroImage: '../../assets/article1/cover.jpg'
tags: ['JavaScript', 'React', 'TypeScript']
---

# Heading 1

Main content...

## Heading 2

More content...
```

### Managing Project Showcase

Edit `src/pages/projects.astro`:

```typescript
const externalProjects = [
	{
		title: 'Project Name',
		description: 'Project description',
		url: 'https://github.com/username/repo',
		tags: ['React', 'TypeScript', 'Node.js'],
		year: 2024,
	},
	// Add more projects...
];
```

### Modifying Personal Information

Edit the About Me section in `src/pages/index.astro`:

```html
<div class="about-text">
	<p>Your personal introduction...</p>
	<p>More about you...</p>
</div>

<div class="skills-tags">
	<span class="skill-tag">JavaScript</span>
	<span class="skill-tag">Python</span>
	<!-- Add more skills -->
</div>
```

---

## ⚙️ Customization

### Site Information

Edit `src/consts.ts`:

```typescript
export const SITE_TITLE = 'Dashi Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
```

### Logo Replacement

1. Prepare a new logo image (PNG format with transparent background recommended)
2. Replace `src/assets/logo.png`
3. Adjust size if needed in `src/pages/index.astro`:

```css
.hero-logo {
	width: 80px;      /* Circular container size */
	height: 80px;
	transform: scale(1.5);  /* Internal scaling ratio */
}
```

### GitHub Link

Edit `src/components/Header.astro` and `src/components/Footer.astro`:

```html
<a href="https://github.com/your-username" target="_blank">
```

### Adding Custom Theme

1. Add theme definition in `src/styles/global.css`:

```css
[data-theme="mytheme"] {
	--accent: #your-color;
	--accent-dark: #darker-color;
	/* Other color variables */
}
```

2. Add button option in `src/components/ThemePicker.astro`

---

## 🛠️ Maintenance Guide

### Daily Maintenance

1. **Adding Articles**: Create `.md` files in `src/content/blog/`
2. **Updating Projects**: Modify `src/pages/projects.astro`
3. **Checking Dependencies**: Run `npm outdated` regularly
4. **Testing Build**: Run `npm run build` before committing

### Performance Optimization Tips

- Use WebP format for images
- Keep individual image size under 500KB
- Use appropriate image dimensions, avoid oversizing
- Regularly clean up unused resources

### Debugging Tips

```bash
# Development mode (hot reload)
npm run dev

# Type checking
npx astro check

# Build and view errors
npm run build

# Preview production version
npm run preview
```

### Common Issues

**Q: Images not displaying?**
- Check if image path is correct
- Ensure images are in `src/assets/` or `public/` directory
- Use relative paths

**Q: Styles not working?**
- Check CSS scope (Astro defaults to scoped)
- Put global styles in `src/styles/global.css`
- Use `:global()` wrapper for global selectors

**Q: Build failed?**
- Check for TypeScript errors
- Run `npx astro check` for detailed information
- Check terminal error messages

---

## 🧰 Tech Stack

### Core Framework
- **Astro** (v5.15.5) - Modern static site generator
- **TypeScript** - Type safety
- **MDX** - Enhanced Markdown support

### Libraries
- **@astrojs/rss** - RSS feed functionality
- **@astrojs/sitemap** - Auto-generate sitemap
- **Sharp** - Image optimization

### Developer Experience
- Hot reload development server
- TypeScript type checking
- CSS modules and scoping
- Component-based development

---

## 📋 Command Reference

| Command | Description |
|:--------|:------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (localhost:4321) |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npx astro check` | Run type checking |
| `npx astro add [integration]` | Add Astro integration |

---

## 📄 Version History

- **v2.1.0** (2024-11) - Optimized homepage layout, refined design
- **v2.0.0** (2024-11) - Added multi-theme support, performance optimization
- **v1.0.0** (2024-01) - Initial release

---

## 📜 License

MIT License - See [LICENSE](./LICENSE) file

---

## 🤝 Contributing

Issues and Pull Requests are welcome!

---

## 📞 Contact

- GitHub: [@Fxk2020](https://github.com/Fxk2020)
- Website: [Dashi Blog](#)

---

**Last Updated:** 2024-11-20  
**Maintainer:** Dashi Team

