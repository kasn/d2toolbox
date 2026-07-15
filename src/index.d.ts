type TCategories = import("./lib/schemas").TCategories;
type TTool = import("./lib/schemas").TTool;
type TQuickLink = import("./lib/schemas").TQuickLink;

type TToolSlug = import("./data").TToolSlug;

// Narrows the schema's plain-string slug to the known tool slugs for authoring.
type TChangelogEntry = Omit<import("./lib/schemas").TChangelogEntry, "slug"> & {
	slug?: TToolSlug;
};

type TGlyph = {
	id: string;
	name: string;
	icon: import("astro").ImageMetadata;
};
