import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginButton } from "./LoginButton";

jest.mock("@heroui/react", () => ({
  Button: (props: any) => <button {...props}>{props.children}</button>,
  Modal: (props: any) => <div>{props.children}</div>,
  ModalContent: (props: any) => <div>{props.children}</div>,
  ModalHeader: (props: any) => <div>{props.children}</div>,
  ModalBody: (props: any) => <div>{props.children}</div>,
  ModalFooter: (props: any) => <div>{props.children}</div>,
  Divider: () => <hr />,
  Form: (props: any) => <form {...props}>{props.children}</form>,
  Input: (props: any) => (
    <input
      aria-label={props.label}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  ),
  User: (props: any) => <div>{props.name}</div>,
  Link: (props: any) => <a href={props.href}>{props.children}</a>,
  useDisclosure: () => ({
    isOpen: true,
    onOpen: jest.fn(),
    onOpenChange: jest.fn(),
  }),
}));

describe("LoginButton Component", () => {
  test("covers user, modal, email, credentials, and google login flows", async () => {
    // ---- 1️⃣ Mock sign-out (user logged in case)
    const mockSignOut = jest.fn().mockResolvedValue(undefined);

    const { rerender } = render(
      <LoginButton
        user={{ name: "Jane Doe", image: "/avatar.png" }}
        signOut={{ label: "Sign out", handleSignOut: mockSignOut }}
        registerPage={{ url: "/register", label: "Register" }}
      />
    );

    // User info and sign-out should render
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    const signOutButton = screen.getByRole("button", { name: /sign out/i });
    fireEvent.click(signOutButton);
    expect(mockSignOut).toHaveBeenCalled();

    // ---- 2️⃣ Modal opens on Login button click (rerender without user)
    rerender(
      <LoginButton
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={{ url: "/register", label: "Register" }}
      />
    );

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    expect(await screen.findByText(/choose your sign in method/i)).toBeInTheDocument();

    // ---- 3️⃣ Email magic link flow
    const handleEmailSubmit = jest.fn().mockResolvedValue(undefined);
    const setEmail = jest.fn();
    rerender(
      <LoginButton
        useEmail={{
          title: "Email Login",
          label: "Send Magic Link",
          email: "test@example.com",
          setEmail,
          handleEmailSubmit,
        }}
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={{ url: "/register", label: "Register" }}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.submit(emailInput.closest("form")!);
    expect(handleEmailSubmit).toHaveBeenCalled();
    expect(await screen.findByText(/check your email/i)).toBeInTheDocument();

    // ---- 4️⃣ Credentials login flow
    const handleCredentialsSubmit = jest.fn().mockResolvedValue(undefined);
    const setCredEmail = jest.fn();
    const setPassword = jest.fn();

    rerender(
      <LoginButton
        useCredentials={{
          title: "Login with Credentials",
          label: "Sign In",
          email: "user@example.com",
          setEmail: setCredEmail,
          password: "secret",
          setPassword,
          handleCredentialsSubmit,
        }}
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={{ url: "/register", label: "Register" }}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }).closest("form")!);
    expect(handleCredentialsSubmit).toHaveBeenCalled();

    // ---- 5️⃣ Google login flow
    const handleGoogleSubmit = jest.fn().mockResolvedValue(undefined);
    rerender(
      <LoginButton
        useGoogle={{
          title: "Google Sign In",
          label: "Continue with Google",
          handleGoogleSubmit,
        }}
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={{ url: "/register", label: "Register" }}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    fireEvent.submit(screen.getByRole("button", { name: /continue with google/i }).closest("form")!);
    expect(handleGoogleSubmit).toHaveBeenCalled();
  });
});
