import React from "react";
import { Button as HeroButton } from '@heroui/react'
export type ButtonProps = {
  label: string;
  onClick?: () => void;
  colour?: "primary" | "success" | "warning" | "danger"
  variant?: "solid" | "bordered" | "faded" | "light" | "ghost" | "shadow"
  isLoading?: boolean;
  size?: "sm" | "md" | "lg"
}

export const Button: React.FC<ButtonProps> = ({ label, colour, variant, isLoading, onClick }) => (
  <HeroButton
    color={colour}
    onPress={onClick}
    variant={variant}
    isLoading={isLoading}
  >
    {label}
  </HeroButton>
);

// export default Button;