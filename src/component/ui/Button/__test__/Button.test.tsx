import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "..";

describe("Button Component", () => {
  it("renders correctly with text", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeDisabled();
  });

  it("renders with correct button type class", () => {
    render(<Button type="primary">Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toHaveClass("ant-btn-primary");
  });

  it("should apply custom styles passed via style prop", () => {
    const customStyles = { backgroundColor: "red", color: "white" };
    render(<Button style={customStyles}>Styled Button</Button>);
    const button = screen.getByRole("button", { name: "Styled Button" });
    expect(button).toHaveStyle("background-color: red");
    expect(button).toHaveStyle("color: white");
  });
});