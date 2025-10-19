import {Masthead} from "./Masthead";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Masthead > = {
  title: "Example/Masthead2",
  component: Masthead ,
};

export default meta;
type Story = StoryObj<typeof Masthead >;

export const Primary: Story = {
//   args: { label: "Click me" },
};