type TCategories =
  | "inventory"
  | "statistics"
  | "analysis"
  | "progress"
  | "lore"
  | "misc"
  | "community"
  | "data"
  | "tools";

type TTool = {
  slug: string;
  name: string;
  url: string;
  description: ReactElement<any>;
  additionalLinks?: Array<string>;
  requiresLogin: boolean;
  active: boolean;
  category: categories[];
  crawl: boolean;
  wait?: undefined | string;
};

type TQuickLink = {
  url: string;
  description: string;
};

type TChangelogEntry = {
  date: string; // ISO date, e.g. "2026-07-08"
  text: string;
  slug?: ToolSlug; // optional tool slug; entry links to that tool's URL
};

type TSymbol = {
  id: string;
  name: string;
  icon: StaticImageData;
};

type BungieToken = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  received_at: number; // epoch ms
  destiny_membership_id?: string;
  membership_type?: BungieMembershipType;
};

type LocalProfile = {
  displayName: string | undefined;
  displayCode: number | undefined;
};
