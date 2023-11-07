// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {}

  observe() {}

  unobserve() {}
};

import { ChakraProvider, theme } from "@chakra-ui/react";
import { AlertProvider } from "../../context/alertContext";
import { render } from "@testing-library/react";
import MachineLearning from "../../pages/MachineLearning";

describe("Machine Learning", () => {
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
          <MachineLearning />
        </AlertProvider>
      </ChakraProvider>
    );
  });

  it("should display a loader before rendering the page", () => {
    const { getByTestId } = render(
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <MachineLearning />
        </AlertProvider>
      </ChakraProvider>
    );
    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
