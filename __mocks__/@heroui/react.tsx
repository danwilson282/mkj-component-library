// __mocks__/@heroui/react.tsx
import React from "react";
export const Button = ({ onPress, children, ...props }: any) => {
  const { isLoading, color, variant, ...rest } = props; // 🧹 remove non-DOM props
  return (
    <button onClick={onPress} {...rest}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export const Modal = ({ children }: any) => <div>{children}</div>;
export const ModalContent = ({ children }: any) => <div>{children}</div>;
export const ModalHeader = ({ children }: any) => <div>{children}</div>;
export const ModalBody = ({ children }: any) => <div>{children}</div>;
export const ModalFooter = ({ children }: any) => <div>{children}</div>;
export const Divider = () => <hr />;

export const Form = ({ onSubmit, children }: any) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export const Input = ({ label, value, onChange, placeholder, type }: any) => (
  <input
    aria-label={label}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
  />
);

export const User = ({ name }: any) => <div>{name}</div>;
export const Link = ({ href, children }: any) => <a href={href}>{children}</a>;

export const useDisclosure = () => ({
  isOpen: true,
  onOpen: jest.fn(),
  onOpenChange: jest.fn(),
});
