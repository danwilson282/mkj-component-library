import React from "react";
import { Button as HeroButton } from '@heroui/react'
export type ButtonProps = {
  label?: string;
  onClick?: () => void;
  colour?: "primary" | "success" | "warning" | "danger"
  variant?: "solid" | "bordered" | "faded" | "light" | "ghost" | "shadow"
  isLoading?: boolean;
  size?: "sm" | "md" | "lg"
  children?: React.ReactNode
  className?: string;
  type?: "cta" | "submit" | "action"
}

export const Button: React.FC<ButtonProps> = ({ label, colour, variant, isLoading, onClick, size, type, children, className }) => (
  <HeroButton
    className={className}
    color={colour}
    onPress={onClick}
    variant={variant}
    isLoading={isLoading}
    size={size}
    type={type === "submit" ? "submit" : "button"}
  >
    {children? children : label}
  </HeroButton>
);

// export default Button;