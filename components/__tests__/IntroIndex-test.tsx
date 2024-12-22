// Test file for IntroIndex.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import IntroIndex from "../intro/IntroIndex";
import { Asset } from "expo-asset";
import { router } from "expo-router";

// Mock dependencies
jest.mock("expo-asset", () => ({
  Asset: {
    fromModule: jest.fn(() => ({ uri: "mocked-image-uri" })),
  },
}));

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

describe("IntroIndex Component", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(<IntroIndex />);

    // Check if the title and description are rendered
    expect(getByText("Welcome to Eventify Hub")).toBeTruthy();
    expect(
      getByText(
        "Create an account with us and experience seamless event planning."
      )
    ).toBeTruthy();

    // Check if buttons are rendered
    expect(getByText("Create Account")).toBeTruthy();
    expect(getByText("Login")).toBeTruthy();
  });

  it("navigates to select role screen when Create Account button is pressed", () => {
    const { getByText } = render(<IntroIndex />);

    const createAccountButton = getByText("Create Account");
    fireEvent.press(createAccountButton);

    // Verify navigation to the select role screen
    expect(router.push).toHaveBeenCalledWith("/selectrole");
  });

  it("navigates to login screen when Login button is pressed", () => {
    const { getByText } = render(<IntroIndex />);

    const loginButton = getByText("Login");
    fireEvent.press(loginButton);

    // Verify navigation to the login screen
    expect(router.push).toHaveBeenCalledWith("/login");
  });

  it("loads the image correctly", () => {
    render(<IntroIndex />);

    // Verify the Asset.fromModule was called
    expect(Asset.fromModule).toHaveBeenCalledWith(
      require("./../../assets/images/GetStarted.png")
    );
  });
});
