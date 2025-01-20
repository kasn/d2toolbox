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
