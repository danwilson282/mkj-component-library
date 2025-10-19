import { Button } from "@heroui/react";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "HeroUI/Button",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    children: "Lorem"
  },
};
