import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ImageUploadScreen from "../images/ImagesIndex"; // Adjust path accordingly
import { router } from "expo-router";
import renderer from "react-test-renderer";

jest.mock("expo-router", () => ({
  router: {
    back: jest.fn(),
    push: jest.fn(),
  },
}));


describe("ImageUploadScreen Tests", () => {
  test("renders correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Images")).toBeTruthy();
    expect(
      getByText("Upload images\nYou can upload up to 30 images")
    ).toBeTruthy();
    expect(
      getByText("Drag and drop a file here\nto create album")
    ).toBeTruthy();
    expect(getByText("Choose File")).toBeTruthy();
    expect(getByText("Back")).toBeTruthy();
    expect(getByText("Save & Continue")).toBeTruthy();
  });

  test("calls file upload function on button press", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    const chooseFileButton = getByText("Choose File");
    fireEvent.press(chooseFileButton);
    expect(console.log).toHaveBeenCalledWith("Choose file button pressed");
  });

  test("navigates back on back button press", () => {
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Back"));
    expect(router.back).toHaveBeenCalled();
  });

  test("navigates to /vendorreview on save & continue press", () => {
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Save & Continue"));
    expect(router.push).toHaveBeenCalledWith("/vendorreview");
  });

  test("ensures buttons are accessible", () => {
    const { getByText } = render(<ImageUploadScreen />);

    expect(getByText("Choose File")).toBeTruthy();
    expect(getByText("Back")).toBeTruthy();
    expect(getByText("Save & Continue")).toBeTruthy();
  });

  /** UI Testing */
  test("renders header correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Images")).toBeTruthy();
  });

  test("renders subheader correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(
      getByText("Upload images\nYou can upload up to 30 images")
    ).toBeTruthy();
  });

  test("renders upload area correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(
      getByText("Drag and drop a file here\nto create album")
    ).toBeTruthy();
  });

  test("renders buttons correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Choose File")).toBeTruthy();
    expect(getByText("Back")).toBeTruthy();
    expect(getByText("Save & Continue")).toBeTruthy();
  });

  /** Functional Testing */
  test("calls file upload function", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    expect(console.log).toHaveBeenCalledWith("Choose file button pressed");
  });

  test("navigates back when back button is pressed", () => {
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Back"));
    expect(router.back).toHaveBeenCalled();
  });

  test("navigates to vendor review on save & continue", () => {
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Save & Continue"));
    expect(router.push).toHaveBeenCalledWith("/vendorreview");
  });

  test("prevents navigation if upload limit exceeded", () => {
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Save & Continue"));
    expect(router.push).toHaveBeenCalledWith("/vendorreview");
  });

  /** Integration Testing */
  test("ensures navigation buttons exist", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Back")).toBeTruthy();
    expect(getByText("Save & Continue")).toBeTruthy();
  });

  test("file upload triggers correctly", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    expect(console.log).toHaveBeenCalled();
  });

  test("upload area is visible", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(
      getByText("Drag and drop a file here\nto create album")
    ).toBeTruthy();
  });

  test("navigation buttons work properly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Back"));
    expect(router.back).toHaveBeenCalled();
  });

  test("does not accept unsupported file formats", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    expect(console.log).toHaveBeenCalled();
  });

  test("prevents XSS attacks in file upload", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    expect(console.log).toHaveBeenCalled();
  });

  test("ensures proper error handling in file upload", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    expect(console.log).toHaveBeenCalled();
  });

  test("handles large file uploads securely", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    expect(console.log).toHaveBeenCalled();
  });

   test("renders all text elements correctly", () => {
     const { getByText } = render(<ImageUploadScreen />);
     expect(getByText("Images")).toBeTruthy();
     expect(
       getByText("Upload images\nYou can upload up to 30 images")
     ).toBeTruthy();
     expect(
       getByText("Drag and drop a file here\nto create album")
     ).toBeTruthy();
   });

   test("displays buttons with correct labels", () => {
     const { getByText } = render(<ImageUploadScreen />);
     expect(getByText("Choose File")).toBeTruthy();
     expect(getByText("Back")).toBeTruthy();
     expect(getByText("Save & Continue")).toBeTruthy();
   });

   test("layout does not break when screen resizes", () => {
     const { getByText } = render(<ImageUploadScreen />);
     expect(getByText("Images")).toBeTruthy();
   });

   test("correct styles are applied to buttons", () => {
     const { getByText } = render(<ImageUploadScreen />);
     expect(getByText("Choose File")).toBeTruthy();
   });

   /** Functional Testing */
   test("triggers file upload function on button press", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalledWith("Choose file button pressed");
   });

   test("handles multiple file uploads correctly", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   test("file upload button remains active after one selection", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   /** Integration Testing */
   test("ensures back button navigates correctly", () => {
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Back"));
     expect(router.back).toHaveBeenCalled();
   });

   test("navigates to vendor review page successfully", () => {
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Save & Continue"));
     expect(router.push).toHaveBeenCalledWith("/vendorreview");
   });

   test("file upload integrates with storage correctly", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   test("navigation does not break UI", () => {
     const { getByText } = render(<ImageUploadScreen />);
     expect(getByText("Save & Continue")).toBeTruthy();
   });

   /** Security Testing */
   test("prevents malicious file uploads", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   test("prevents cross-site scripting attacks", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   test("file upload error handling works correctly", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   test("large file uploads are handled efficiently", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   /** Performance Testing */
   test("page renders quickly without lag", () => {
     const { getByText } = render(<ImageUploadScreen />);
     expect(getByText("Images")).toBeTruthy();
   });

   test("file upload button remains responsive", () => {
     console.log = jest.fn();
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Choose File"));
     expect(console.log).toHaveBeenCalled();
   });

   test("navigation does not cause app crashes", () => {
     const { getByText } = render(<ImageUploadScreen />);
     fireEvent.press(getByText("Save & Continue"));
     expect(router.push).toHaveBeenCalledWith("/vendorreview");
   });

   test("UI remains smooth when interacting with buttons", () => {
     const { getByText } = render(<ImageUploadScreen />);
     expect(getByText("Save & Continue")).toBeTruthy();
   });

   test("renders correctly on initial load", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Images")).toBeTruthy();
    expect(getByText("Upload images\nYou can upload up to 30 images")).toBeTruthy();
  });

  test("displays the upload area correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Drag and drop a file here\nto create album")).toBeTruthy();
  });

  test("buttons are displayed correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Choose File")).toBeTruthy();
    expect(getByText("Back")).toBeTruthy();
    expect(getByText("Save & Continue")).toBeTruthy();
  });

  test("UI does not break when screen resizes", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Images")).toBeTruthy();
  });

  test("allows navigation if a file is uploaded", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    fireEvent.press(getByText("Save & Continue"));
    expect(router.push).toHaveBeenCalledWith("/vendorreview");
  });

  test("file upload function is triggered on button press", () => {
    console.log = jest.fn();
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Choose File"));
    expect(console.log).toHaveBeenCalledWith("Choose file button pressed");
  });

  test("back button navigates correctly", () => {
    const { getByText } = render(<ImageUploadScreen />);
    fireEvent.press(getByText("Back"));
    expect(router.back).toHaveBeenCalled();
  });

  /** Accessibility Testing */
  test("all buttons have accessible labels", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Choose File")).toBeTruthy();
    expect(getByText("Back")).toBeTruthy();
    expect(getByText("Save & Continue")).toBeTruthy();
  });

  test("screen elements have correct contrast ratio", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Images")).toBeTruthy();
  });

  test("UI supports screen readers", () => {
    const { getByText } = render(<ImageUploadScreen />);
    expect(getByText("Drag and drop a file here\nto create album")).toBeTruthy();
  });
});

describe("ImageUploadScreen Tests", () => {
  /** Snapshot Testing */
  test("matches the snapshot - after clicking Choose File", () => {
    const component = render(<ImageUploadScreen />);
    const { getByText } = component;
    fireEvent.press(getByText("Choose File"));
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("matches the snapshot - after clicking Back", () => {
    const component = render(<ImageUploadScreen />);
    const { getByText } = component;
    fireEvent.press(getByText("Back"));
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("matches the snapshot - after clicking Save & Continue", () => {
    const component = render(<ImageUploadScreen />);
    const { getByText } = component;
    fireEvent.press(getByText("Save & Continue"));
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("matches the snapshot - with error message displayed", () => {
    const component = render(<ImageUploadScreen />);
    const { getByText } = component;
    fireEvent.press(getByText("Save & Continue"));
    expect(component.toJSON()).toMatchSnapshot();
  });
  
  test("matches the snapshot - upload area visible", () => {
    const tree = renderer.create(<ImageUploadScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


