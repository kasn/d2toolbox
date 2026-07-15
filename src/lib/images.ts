// Screenshot images for tool cards, keyed by tool slug,
// matching src/images/{slug}.{png,jpg}. Optimized via astro:assets.

import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
	"../images/*.{png,jpg}",
	{ eager: true },
);

export function toolImage(slug: string): ImageMetadata {
	const key = Object.keys(images).find((k) =>
		k.match(new RegExp(`/${slug}\\.(png|jpg)$`)),
	);
	if (!key) {
		throw new Error(`Unknown image for slug: ${slug}`);
	}
	return images[key].default;
}
