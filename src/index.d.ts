type TTool = {
  name: string;
  url: string;
  description: ReactElement | string;
  additionalLinks?: Array<string>;
  image: string;
  requiresLogin: boolean;
};
