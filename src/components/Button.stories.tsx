import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: "Click me" },
};