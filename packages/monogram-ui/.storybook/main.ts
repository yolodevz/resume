import * as path from "path";

import type { StorybookConfig } from "@storybook/nextjs";

console.log(path.resolve(__dirname, "../../../apps/monogram/next.config.js"));

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require.resolve("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(
        __dirname,
        "../../../apps/monogram/next.config.js"
      ),
    },
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
  },
};
export default config;
