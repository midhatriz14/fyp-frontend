import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Sandwich1Index from "../sandwich1/Sandwich1Index";
import { router } from "expo-router";

jest.mock("expo-router", () => ({
  router: { push: jest.fn() }, // Mock router.push function
}));

describe("Sandwich1Index Screen", () => {
  test("renders all UI elements correctly", () => {
    const { getByText } = render(<Sandwich1Index />);

    // Use regex for partial text match
    expect(getByText(/VENDORS AT YOUR/)).toBeTruthy();
    expect(getByText(/FINGERTIPS!/)).toBeTruthy();

    // Check Description
    expect(getByText(/Easily search, sort by price and reviews/)).toBeTruthy();
  });

  test("navigates to /intro when SKIP is pressed", () => {
    const { getByText } = render(<Sandwich1Index />);

    const skipButton = getByText("SKIP");
    fireEvent.press(skipButton);

    expect(router.push).toHaveBeenCalledWith("/intro");
  });

  test("navigates to /sandwich2 when NEXT is pressed and logs to console", () => {
    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(); // Mock console.log

    const { getByText } = render(<Sandwich1Index />);

    const nextButton = getByText("NEXT");
    fireEvent.press(nextButton);

    // Check navigation
    expect(router.push).toHaveBeenCalledWith("/sandwich2");

    // Check console.log
    expect(consoleLogSpy).toHaveBeenCalledWith("Sandwich 2");

    consoleLogSpy.mockRestore(); // Restore original console.log
  });
});
