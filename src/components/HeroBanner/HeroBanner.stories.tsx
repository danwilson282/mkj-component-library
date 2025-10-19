import HeroBanner from "./HeroBanner";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof HeroBanner  > = {
  title: "Example/Hero banner",
  component: HeroBanner  ,
};

export default meta;
type Story = StoryObj<typeof HeroBanner  >;

export const Primary: Story = {
//   args: { label: "Click me" },
};