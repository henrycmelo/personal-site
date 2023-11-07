// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  unobserve() {}
};

import { ChakraProvider, theme } from "@chakra-ui/react";
import { AlertProvider } from "../../context/alertContext";
import { render, screen, waitFor } from "@testing-library/react";
import Dash from "../../pages/Dash";

describe("DashPage", () => {
  //mocking window.matchMedia that is being used by chakra ui.

  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  it("should render without crashing", () => {
    render(
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <Dash />
        </AlertProvider>
      </ChakraProvider>
    );
  });

  it("should display a loader before rendering the page", () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <Dash />
        </AlertProvider>
      </ChakraProvider>
    );
    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
