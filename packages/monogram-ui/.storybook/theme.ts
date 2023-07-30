import { create } from "@storybook/theming/create";
// @ts-ignore
import logo from "../public/monogram.svg";

export default create({
  base: "dark",
  brandTitle: "Monogram",
  brandUrl: "https://monogram.io/",
  brandImage: logo,
  brandTarget: "_self",
});
