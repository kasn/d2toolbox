type TTool = {
  name: string;
  url: string;
  description: ReactElement | string;
  additionalLinks?: Array<string>;
  image: {
    src: string;
    width: number;
    height: number;
  };
  requiresLogin: boolean;
};
