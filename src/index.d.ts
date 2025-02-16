import type { StaticImageData } from "next/image";

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
};

type TSymbol = {
  id: string;
  name: string;
  icon: StaticImageData;
};
