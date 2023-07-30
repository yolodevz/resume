import { dirname, join } from "path";
import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  refs: (config, {
    configType
  }) => {
    if (configType === "DEVELOPMENT") {
      return {
        "yolo-design-system": {
          title: "Yolo design system",
          url: "http://localhost:6007/"
        },
        "monogram-design-system": {
          title: "Monogram design system",
          url: "http://localhost:6008/"
        }
      };
    }
    return {
      "yolo-design-system": {
        title: "Yolo design system",
        url: "/yolo-ui"
      },
      "monogram-design-system": {
        title: "Monogram design system",
        url: "/monogram-ui"
      }
    };
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      /** to fix this issue: https://github.com/storybookjs/storybook/issues/18920#issuecomment-1342865124 */
      define: {
        "process.env": {}
      }
    });
  }
};
export default config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}