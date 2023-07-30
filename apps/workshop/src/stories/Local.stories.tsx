import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: () => <div>Placeholder for local stories.</div>,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
