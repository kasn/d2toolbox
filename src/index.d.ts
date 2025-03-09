type categories =
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
