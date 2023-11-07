// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  unobserve() {}
};

import { ChakraProvider, theme } from "@chakra-ui/react";
import { AlertProvider } from "../../context/alertContext";
import DjangoPage from "../../pages/DjangoPage";
import { render, screen, waitFor } from "@testing-library/react";

describe("DjangoPage", () => {
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
          <DjangoPage />
        </AlertProvider>
      </ChakraProvider>
    );
  });

  it("should display a loader before rendering the page", () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <DjangoPage />
        </AlertProvider>
      </ChakraProvider>
    );
    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
