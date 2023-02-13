type TAdditionalLink = {
  url: string;
  type: string;
};

type TTool = {
  name: string;
  url: string;
  description: ReactElement | string;
  additionalLinks?: Array<TAdditionalLink>;
  image: string;
  requiresLogin: boolean;
};
