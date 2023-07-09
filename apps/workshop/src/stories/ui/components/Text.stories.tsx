import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "ui";

const meta = {
  title: "ui/components/Text",
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
