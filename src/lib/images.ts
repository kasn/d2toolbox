// Build-time responsive images via vite-imagetools.
// Keyed by tool slug, matching src/images/{slug}.{png,jpg}.

const srcsets = import.meta.glob("../images/*.{png,jpg}", {
  eager: true,
  query: "?w=400;700;1400&format=webp&as=srcset",
  import: "default",
}) as Record<string, string>;

const fallbacks = import.meta.glob("../images/*.{png,jpg}", {
  eager: true,
  query: "?w=700&format=webp",
  import: "default",
}) as Record<string, string>;

function keyForSlug(slug: string): string | undefined {
  return Object.keys(fallbacks).find((key) =>
    key.match(new RegExp(`/${slug}\\.(png|jpg)$`)),
  );
}

export function responsiveImage(slug: string): {
  src: string;
  srcSet: string;
} {
  const key = keyForSlug(slug);
  if (!key) {
    throw new Error(`Unknown image for slug: ${slug}`);
  }
  return { src: fallbacks[key], srcSet: srcsets[key] };
}
