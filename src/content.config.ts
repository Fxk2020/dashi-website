import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const experience = defineCollection({
	// Load Markdown and MDX files in the `src/content/experience/` directory.
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
			category: z.string().optional(), // 分类：技术分享、职场经验等
		}),
});

const travel = defineCollection({
	// Load Markdown and MDX files in the `src/content/travel/` directory.
	loader: glob({ base: './src/content/travel', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			location: z.string(),
			date: z.string(), // 旅行日期（如：2023年8月）
			description: z.string(),
			coverImage: image().optional(), // 封面图片
			heroImage: image().optional(), // 头图
			images: z.array(image()).optional(), // 照片集合（使用 image() 类型）
			highlights: z.array(z.string()).optional(), // 精彩亮点
			duration: z.string().optional(), // 旅行时长
			bestSeason: z.string().optional(), // 最佳季节
			budget: z.string().optional(), // 预算
		}),
});

export const collections = { blog, experience, travel };
