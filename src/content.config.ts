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

const books = defineCollection({
	// Load Markdown and MDX files in the `src/content/books/` directory.
	loader: glob({ base: './src/content/books', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(), // 书名
			author: z.string(), // 作者
			publisher: z.string().optional(), // 出版社
			pubYear: z.string().optional(), // 出版年份
			coverImage: image().optional(), // 封面图片
			rating: z.number().min(0).max(5).optional(), // 评分（0-5）
			readDate: z.coerce.date(), // 阅读日期
			tags: z.array(z.string()).optional(), // 标签（如：小说、技术、历史等）
			category: z.string().optional(), // 分类
			status: z.enum(['reading', 'finished', 'abandoned']).optional(), // 阅读状态
			summary: z.string(), // 简短总结
			thoughts: z.string(), // 读后感想（在列表页展示）
		}),
});

export const collections = { blog, experience, travel, books };
