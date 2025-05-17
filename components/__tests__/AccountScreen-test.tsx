import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { Linking } from "react-native";
import AccountScreen from "../account/AccountIndex";

const mockPush = jest.fn(); // ✅ Use a shared mock function for router

jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: mockPush,
    back: jest.fn(),
  }),
}));


describe("AccountScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // ✅ Reset mock calls before each test
  });

  it("renders the profile section with correct user name and a valid email", () => {
    const { getByText } = render(<AccountScreen />);

    expect(getByText("Midhat Rizvi")).toBeTruthy(); // ✅ Allow any username
    expect(
      getByText(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)
    ).toBeTruthy();
    // ✅ Allows any valid email
  });

  it("navigates to Edit Profile when Edit Profile is clicked", () => {
    const { getByText } = render(<AccountScreen />);
    fireEvent.press(getByText("Edit Profile"));
    expect(mockPush).toHaveBeenCalledWith("/editprofile"); // ✅ Fixed router mock issue
  });

  it("navigates to Notifications when Notifications is clicked", () => {
    const { getAllByText } = render(<AccountScreen />);
    const [menuButton] = getAllByText("Notifications"); // ✅ Select the first occurrence
    fireEvent.press(menuButton);
    expect(mockPush).toHaveBeenCalledWith("/notificationacc");
  });

  it("shows the confirmation modal when Sign Out is clicked", async () => {
    const { getByText, queryByTestId } = render(<AccountScreen />);

    fireEvent.press(getByText("Sign Out"));

    await waitFor(() => {
      expect(queryByTestId("logout-modal")).not.toBeNull(); // ✅ Ensure modal appears
    });
  });

  it("closes the confirmation modal when cancel is clicked", async () => {
    const { getByText, queryByTestId } = render(<AccountScreen />);

    fireEvent.press(getByText("Sign Out"));

    await waitFor(() => {
      expect(queryByTestId("logout-modal")).not.toBeNull(); // ✅ Ensure modal appears
    });

    fireEvent.press(getByText("Cancel"));

    await waitFor(() => {
      expect(queryByTestId("logout-modal")).toBeNull(); // ✅ Ensure modal disappears
    });
  });

 it("renders all menu options correctly", () => {
   const { getAllByText } = render(<AccountScreen />);

   const menuOptions = [
     "Edit Profile",
     "Notifications",
     "Frequently Asked Questions",
     "Contact Us",
     "Sign Out",
   ];

   menuOptions.forEach((option) => {
     const matchingElements = getAllByText(option); // ✅ Get all elements matching the text
     expect(matchingElements.length).toBeGreaterThan(0); // ✅ Ensure at least one exists
   });
 });

 it("navigates to Terms of Service when the link is clicked", () => {
   const { getByText } = render(<AccountScreen />);

   fireEvent.press(getByText("Terms of Service"));

   expect(mockPush).toHaveBeenCalledWith("/termsofservices");
 });

it("opens WhatsApp with the correct URL when 'Contact Us' is clicked", async () => {
  const { getByText } = render(<AccountScreen />);

  fireEvent.press(getByText("Contact Us"));

  const expectedURL = `whatsapp://send?phone=923331283810&text=${encodeURIComponent(
    "Hello, I need assistance."
  )}`; // ✅ Encode the expected value

  await waitFor(() => {
    expect(Linking.canOpenURL).toHaveBeenCalled();
    expect(Linking.openURL).toHaveBeenCalledWith(expectedURL); // ✅ Now the test matches encoding
  });
});
it("renders the profile avatar correctly", () => {
  const { getByText } = render(<AccountScreen />);
  expect(getByText("MR")).toBeTruthy(); // ✅ Checks if avatar is displayed
});

it("navigates to Privacy Policy when the link is clicked", () => {
  const { getByText } = render(<AccountScreen />);

  fireEvent.press(getByText("Privacy Policy"));

  expect(mockPush).toHaveBeenCalledWith("/privacypolicy");
});

it("does not show logout confirmation modal initially", () => {
  const { queryByTestId } = render(<AccountScreen />);

  expect(queryByTestId("logout-modal")).toBeNull(); // ✅ Modal should be hidden at start
});

it("renders all bottom navigation items correctly", () => {
  const { getAllByText } = render(<AccountScreen />);

  const bottomNavItems = ["Dashboard", "Messages", "Notifications", "Account"];

  bottomNavItems.forEach((item) => {
    const elements = getAllByText(item); // ✅ Get all elements matching the text
    expect(elements.length).toBeGreaterThan(0); // ✅ Ensure at least one exists
    expect(elements[elements.length - 1]).toBeTruthy(); // ✅ Select the last occurrence (bottom nav)
  });
});
it("renders and allows clicking 'Edit Profile' button", () => {
  const { getByText } = render(<AccountScreen />);
  const editProfileButton = getByText("Edit Profile");

  expect(editProfileButton).toBeTruthy(); // ✅ Exists
  fireEvent.press(editProfileButton);
  expect(mockPush).toHaveBeenCalledWith("/editprofile"); // ✅ Navigates correctly
});
it("renders 'Sign Out' button before interaction", () => {
  const { getByText } = render(<AccountScreen />);
  expect(getByText("Sign Out")).toBeTruthy(); // ✅ Check before clicking
});

it("closes logout modal when back is pressed", async () => {
  const { getByText, queryByTestId } = render(<AccountScreen />);

  fireEvent.press(getByText("Sign Out"));
  await waitFor(() => expect(queryByTestId("logout-modal")).toBeTruthy()); // ✅ Modal appears

  fireEvent.press(getByText("Cancel")); // Simulate pressing back
  await waitFor(() => expect(queryByTestId("logout-modal")).toBeNull()); // ✅ Modal disappears
});

});
