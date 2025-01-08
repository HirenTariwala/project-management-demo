import { act, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // for the matchers
import LoadingPage from "../../Loading";

describe("LoadingPage", () => {
  it("should render a loading spinner", () => {
    const { container } = render(<LoadingPage />);

    const spinner = container.querySelector(".ant-spin");
    expect(spinner).toBeInTheDocument();
  });

  it("should have a loading spinner with a delay of 500ms", async () => {
    jest.useFakeTimers();
    const { container } = render(<LoadingPage />);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    const spinner = await waitFor(() => container.querySelector(".ant-spin"));
    expect(spinner).toHaveClass("ant-spin-spinning");

    jest.useRealTimers();
  });
});
