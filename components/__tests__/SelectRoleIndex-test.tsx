import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SelectRoleScreen from "../selectrole/SelectRoleIndex";
import { router } from "expo-router";
import SelectRoleIndex from "../selectrole/SelectRoleIndex";

jest.mock("@/store", () => ({
  saveSecureData: jest.fn(),
}));

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));
// Mock global alert
global.alert = jest.fn();

describe("SelectRoleScreen", () => {
  // Clean up mocks after each test
  afterEach(() => {
    jest.clearAllMocks(); // Reset all mock data
  });

  it("renders correctly", () => {
    const { getByText } = render(<SelectRoleScreen />);
    expect(getByText("Select Your Role")).toBeTruthy();
    expect(getByText("Join As")).toBeTruthy();
    expect(getByText("Select")).toBeTruthy();
  });

  it("has the correct default state", () => {
    const { getByText } = render(<SelectRoleScreen />);
    expect(getByText("Select")).toBeTruthy(); // Default role is 'Select'
  });

  it("updates the state when a role is selected", () => {
    const { getByText, getByTestId } = render(<SelectRoleScreen />);
    fireEvent.press(getByText("Select")); // Open modal
    fireEvent(getByTestId("picker"), "onValueChange", "Vendor"); // Select "Vendor"
    expect(getByText("Vendor")).toBeTruthy(); // Confirm state update
  });

  it("navigates to the correct route for Vendor", async () => {
    const { getByText, getByTestId } = render(<SelectRoleScreen />);
    fireEvent.press(getByText("Select")); // Open modal
    fireEvent(getByTestId("picker"), "onValueChange", "Vendor"); // Select "Vendor"
    fireEvent.press(getByText("Confirm")); // Confirm selection
    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith("/bussinessselection");
    });
  });

  it("navigates to the correct route for Organizer", async () => {
    const { getByText, getByTestId } = render(<SelectRoleScreen />);
    fireEvent.press(getByText("Select")); // Open modal
    fireEvent(getByTestId("picker"), "onValueChange", "Organizer"); // Select "Organizer"
    fireEvent.press(getByText("Confirm")); // Confirm selection
    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith("/signup");
    });
  });

  it("displays an alert if no role is selected", () => {
    global.alert = jest.fn(); // Mock the alert function

    const { getByText } = render(<SelectRoleScreen />);

    // Simulate pressing the Confirm button
    fireEvent.press(getByText("Confirm"));

    // Check that the alert was triggered
    expect(global.alert).toHaveBeenCalledWith("Please select a valid role!");
  });

  it("enables the Confirm button when a role is selected", () => {
    const { getByTestId, getByText } = render(<SelectRoleScreen />);

    // Simulate selecting a role
    fireEvent.press(getByText("Select")); // Open the picker modal
    fireEvent(getByTestId("picker"), "onValueChange", "Vendor"); // Select "Vendor"

    // Find the Confirm button using the testID
    const confirmButton = getByTestId("confirm-button");

    // Check that the Confirm button is enabled
    expect(confirmButton.props.accessibilityState.disabled).toBe(false);
  });
});
