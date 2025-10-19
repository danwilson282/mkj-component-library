import { HeroUIProvider } from "@heroui/react";
import { Meta } from "@storybook/react";

const meta: Meta<typeof HeroUIProvider> = {
  title: "HeroUI/HeroUIProvider",
  component: HeroUIProvider,
};

export default meta;

export const Default = {
  args: {},
};
