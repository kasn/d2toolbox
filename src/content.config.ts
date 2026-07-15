import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { changelog, quickLinks, tools } from "./data";
import {
	changelogEntrySchema,
	quickLinkSchema,
	toolSchema,
} from "./lib/schemas";

// getCollection() returns entries sorted by id, not insertion order —
// collections without a natural sort key (like changelog's date) carry
// an explicit `order` for consumers to sort by.
const toolsCollection = defineCollection({
	loader: () =>
		tools.map((tool, index) => ({ id: tool.slug, order: index, ...tool })),
	schema: toolSchema.extend({ order: z.number() }),
});

const quickLinksCollection = defineCollection({
	loader: () =>
		quickLinks.map((link, index) => ({ id: link.url, order: index, ...link })),
	schema: quickLinkSchema.extend({ order: z.number() }),
});

const changelogCollection = defineCollection({
	loader: () =>
		changelog.map((entry, index) => ({
			id: `${entry.date}-${index}`,
			...entry,
		})),
	schema: changelogEntrySchema,
});

export const collections = {
	tools: toolsCollection,
	quickLinks: quickLinksCollection,
	changelog: changelogCollection,
};
