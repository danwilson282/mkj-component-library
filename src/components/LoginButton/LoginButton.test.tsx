import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginButton } from "./LoginButton";

jest.mock("@heroui/react");

const defaultRegisterPage = { url: "/register", label: "Register" };

describe("LoginButton Component", () => {
  // 1️⃣ — Logged-in state
  test("renders user info and calls sign-out handler", () => {
    const mockSignOut = jest.fn().mockResolvedValue(undefined);

    render(
      <LoginButton
        user={{ name: "Jane Doe", image: "/avatar.png" }}
        signOut={{ label: "Sign out", handleSignOut: mockSignOut }}
        registerPage={defaultRegisterPage}
      />
    );

    expect(screen.getByText("Jane Doe")).toBeInTheDocument();

    const signOutButton = screen.getByRole("button", { name: /sign out/i });
    fireEvent.click(signOutButton);

    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });

  // 2️⃣ — Modal open/close flow
  test("renders Login button and opens modal", async () => {
    render(
      <LoginButton
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={defaultRegisterPage}
      />
    );

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    expect(await screen.findByText(/choose your sign in method/i)).toBeInTheDocument();
  });

  // 3️⃣ — Email magic link flow
  test("handles email login submission and shows confirmation message", async () => {
    const handleEmailSubmit = jest.fn().mockResolvedValue(undefined);
    const setEmail = jest.fn();

    render(
      <LoginButton
        useEmail={{
          title: "Email Login",
          label: "Send Magic Link",
          email: "test@example.com",
          setEmail,
          handleEmailSubmit,
        }}
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={defaultRegisterPage}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.submit(emailInput.closest("form")!);

    expect(handleEmailSubmit).toHaveBeenCalledTimes(1);
    expect(await screen.findByText(/check your email/i)).toBeInTheDocument();
  });

  // 4️⃣ — Credentials login
  test("handles credentials login submission", () => {
    const handleCredentialsSubmit = jest.fn().mockResolvedValue(undefined);
    const setEmail = jest.fn();
    const setPassword = jest.fn();

    render(
      <LoginButton
        useCredentials={{
          title: "Credentials Login",
          label: "Sign In",
          email: "user@example.com",
          setEmail,
          password: "secret",
          setPassword,
          handleCredentialsSubmit,
        }}
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={defaultRegisterPage}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    fireEvent.submit(screen.getByRole("button", { name: /sign in/i }).closest("form")!);

    expect(handleCredentialsSubmit).toHaveBeenCalledTimes(1);
  });

  // 5️⃣ — Google login
  test("renders and triggers Google login", () => {
    const handleGoogleSubmit = jest.fn().mockResolvedValue(undefined);

    render(
      <LoginButton
        useGoogle={{
          title: "Google Sign In",
          label: "Continue with Google",
          handleGoogleSubmit,
        }}
        signOut={{ label: "Sign out", handleSignOut: jest.fn() }}
        registerPage={defaultRegisterPage}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    fireEvent.submit(screen.getByRole("button", { name: /continue with google/i }).closest("form")!);

    expect(handleGoogleSubmit).toHaveBeenCalledTimes(1);
  });
});
