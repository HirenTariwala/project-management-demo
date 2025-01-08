import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputText } from "../InputText";

describe("InputText Component", () => {
  it("renders without crashing", () => {
    render(<InputText placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("fires onChange event when typing in the input field", () => {
    const handleChange = jest.fn();
    render(<InputText placeholder="Enter text" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "Test input" } });
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should pass additional props correctly", () => {
    render(<InputText placeholder="Enter text" disabled />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeDisabled();
  });
});
