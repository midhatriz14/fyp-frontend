jest.mock("react-native-toast-message", () => ({
  default: {
    show: jest.fn(),
    hide: jest.fn(),
  }
}));
