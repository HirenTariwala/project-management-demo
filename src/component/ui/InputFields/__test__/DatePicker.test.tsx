import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DatePicker } from "../DatePicker"; // Adjust the import path

describe("DatePicker Component", () => {
  it("renders DatePicker without crashing", () => {
    render(<DatePicker />);
    const datePickerElement = screen.getByRole("textbox");
    expect(datePickerElement).toBeInTheDocument();
  });

  it("should have the disabled prop passed correctly", () => {
    render(<DatePicker disabled />);
    const datePickerElement = screen.getByRole("textbox");
    expect(datePickerElement).toBeDisabled();
  });
});
