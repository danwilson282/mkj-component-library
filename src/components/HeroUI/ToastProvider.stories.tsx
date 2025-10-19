import { ToastProvider } from "@heroui/react";
import { Meta } from "@storybook/react";

const meta: Meta<typeof ToastProvider> = {
  title: "HeroUI/ToastProvider",
  component: ToastProvider,
};

export default meta;

export const Default = {
  args: {},
};
