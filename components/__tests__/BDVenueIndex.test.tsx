import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import BusinessDetailsForm from "../bdvenue/BDVenueIndex";
import { router } from "expo-router";
import postVenueBusinessDetails from "@/services/postVenueBusinessDetails";
import { getSecureData } from "@/store";
import { Alert } from "react-native";


jest.spyOn(Alert, "alert");

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
    back: jest.fn(),
  },
}));

jest.mock("@expo/vector-icons", () => {
  return {
    FontAwesome5: "MockedIcon",
  };
});

jest.mock("@/services/postVenueBusinessDetails", () => jest.fn());

const mockPostVenueBusinessDetails =
  postVenueBusinessDetails as jest.MockedFunction<
    typeof postVenueBusinessDetails
  >;

jest.mock("@/store", () => ({
  getSecureData: jest.fn().mockResolvedValue(JSON.stringify({ _id: "12345" })),
}));

describe("BusinessDetailsForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(<BusinessDetailsForm />);
    expect(getByText("Business Details")).toBeTruthy();
  });

  it("validates required fields on submit", async () => {
    const { getByText } = render(<BusinessDetailsForm />);
    fireEvent.press(getByText("Save & Continue"));

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        "Error",
        "Please fill in all the required fields marked with *."
      );
    });
  });

  it("allows user input in text fields", () => {
    const { getByPlaceholderText } = render(<BusinessDetailsForm />);
    const expertiseInput = getByPlaceholderText("Enter expertise");
    fireEvent.changeText(expertiseInput, "Catering Services");
    expect(expertiseInput.props.value).toBe("Catering Services");
  });

  it("selects venue type correctly", () => {
    const { getByText } = render(<BusinessDetailsForm />);
    const hallButton = getByText("HALL");
    fireEvent.press(hallButton);
    expect(hallButton).toBeTruthy();
  });

  it("navigates back when back button is pressed", () => {
    const { getByText } = render(<BusinessDetailsForm />);
    fireEvent.press(getByText("Back"));
    expect(router.back).toHaveBeenCalled();
  });
});
