import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputTextArea } from "../InputTextArea";

describe("InputTextArea Component", () => {
  it("renders without crashing", () => {
    render(<InputTextArea placeholder="Enter some text" />);
    const textAreaElement = screen.getByPlaceholderText("Enter some text");
    expect(textAreaElement).toBeInTheDocument();
  });

  it("fires onChange event when typing in the text area", () => {
    const handleChange = jest.fn();
    render(
      <InputTextArea placeholder="Enter some text" onChange={handleChange} />
    );
    const textAreaElement = screen.getByPlaceholderText("Enter some text");
    fireEvent.change(textAreaElement, {
      target: { value: "Test input in text area" },
    });
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should pass additional props like disabled correctly", () => {
    render(<InputTextArea placeholder="Enter some text" disabled />);
    const textAreaElement = screen.getByPlaceholderText("Enter some text");
    expect(textAreaElement).toBeDisabled();
  });
});
