import type { Meta, StoryObj } from "@storybook/react";
// import "../../../../styles/styles.yolo.css";

import { Header } from "@yolo/ui";

const meta = {
  title: "yolo/slices/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Button",
  },
};
