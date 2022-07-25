// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main?: string;
      secondary?: string;
      background?: string;
      gray?: string;
      lightGray?: string;
      black?: string;
      white?: string;
    };
    spacing: {
      radius?: string;
    };
  }
}
