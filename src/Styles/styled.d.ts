import {} from "styled-components";
import { themeType } from "./AppTheme";

declare module "styled-components" {
  interface DefaultTheme extends themeType {}
}
