import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { 
    label: "Click me",
    colour: "primary",
    variant: "solid",
    isLoading: false
   },
};

export const Secondary: Story = {
  ...Primary,
  args: { 
    ...Primary.args,
    colour: "success" 
  },
};