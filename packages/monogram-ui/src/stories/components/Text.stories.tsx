import type { Meta, StoryObj } from "@storybook/react";
// import "../../../../styles/styles.monogram.css";

import { Text } from "../../components";

const meta = {
  title: "monogram/components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "change me",
  },
};
