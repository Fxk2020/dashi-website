// Internationalization configuration

export const languages = {
	en: 'English',
	zh: '中文',
};

export const defaultLang = 'zh';

export const ui = {
	en: {
		'nav.home': 'Home',
		'nav.blog': 'Blogs',
		'nav.projects': 'Projects',
		'nav.about': 'About',
		'blog.search': 'Search blog posts...',
		'blog.allTags': 'All Tags',
		'blog.readMore': 'Read more',
		'projects.title': 'Projects & External Content',
		'projects.description': 'Explore my open source projects, contributions, and articles published on various platforms',
		'projects.projectsSection': 'Projects',
		'projects.blogSection': 'External Blog Posts',
		'footer.rights': 'All rights reserved.',
		'theme.light': 'Light',
		'theme.dark': 'Dark',
		'theme.auto': 'Auto',
	},
	zh: {
		'nav.home': '首页',
		'nav.blog': '博客',
		'nav.projects': '项目',
		'nav.about': '关于',
		'blog.search': '搜索博客文章...',
		'blog.allTags': '所有标签',
		'blog.readMore': '阅读更多',
		'projects.title': '项目与外部内容',
		'projects.description': '探索我的开源项目、贡献以及在各个平台发布的文章',
		'projects.projectsSection': '项目',
		'projects.blogSection': '外部博客文章',
		'footer.rights': '版权所有',
		'theme.light': '浅色',
		'theme.dark': '深色',
		'theme.auto': '自动',
	},
} as const;

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof typeof ui[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	}
}









