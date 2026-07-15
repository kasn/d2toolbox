// Single source of truth for the data shapes: the zod schemas validate the
// content collections at build time, the inferred types feed the global
// aliases in src/index.d.ts.

import { z } from "astro/zod";

export const categorySchema = z.enum([
	"inventory",
	"statistics",
	"analysis",
	"progress",
	"lore",
	"misc",
	"community",
	"data",
	"tools",
]);

export const toolSchema = z.object({
	slug: z.string(),
	name: z.string(),
	url: z.string(),
	description: z.string(), // may contain inline HTML like <br />
	additionalLinks: z.array(z.string()).optional(),
	requiresLogin: z.boolean(),
	active: z.boolean(),
	category: z.array(categorySchema),
	crawl: z.boolean(),
	wait: z.string().optional(),
});

export const quickLinkSchema = z.object({
	url: z.string().url(),
	description: z.string(),
});

export const changelogEntrySchema = z.object({
	date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // ISO date, e.g. "2026-07-08"
	text: z.string(),
	slug: z.string().optional(), // tool slug; entry links to that tool's URL
});

export type TCategories = z.infer<typeof categorySchema>;
export type TTool = z.infer<typeof toolSchema>;
export type TQuickLink = z.infer<typeof quickLinkSchema>;
export type TChangelogEntry = z.infer<typeof changelogEntrySchema>;
