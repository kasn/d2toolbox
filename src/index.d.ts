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
  name: string;
  url: string;
  description: ReactElement<any>;
  additionalLinks?: Array<string>;
  image: {
    src: string;
    width: number;
    height: number;
  };
  requiresLogin: boolean;
  active: boolean;
  category: categories[];
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
  destiny_membership_id: string;
  membership_type: BungieMembershipType;
};
