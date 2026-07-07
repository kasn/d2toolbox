// Build-time responsive images via vite-imagetools.
// Keyed by the "/images/foo.png" paths used in src/data.tsx.

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

export function responsiveImage(publicPath: string): {
  src: string;
  srcSet: string;
} {
  const key = publicPath.replace(/^\/images\//, "../images/");
  const src = fallbacks[key];
  const srcSet = srcsets[key];
  if (!src || !srcSet) {
    throw new Error(`Unknown image: ${publicPath}`);
  }
  return { src, srcSet };
}
