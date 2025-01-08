import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Typography from "..";

describe("Typography Component", () => {
  it("renders text type by default", () => {
    render(<Typography>{"This is a text"}</Typography>);
    const textElement = screen.getByText("This is a text");
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe("SPAN");
  });

  it("renders children correctly", () => {
    render(
      <Typography typographyType="paragraph">
        {"Children content is here"}
      </Typography>
    );

    const contentElement = screen.getByText("Children content is here");
    expect(contentElement).toBeInTheDocument();
  });

  it("supports other AntdTypography props like style", () => {
    render(
      <Typography typographyType="text" style={{ color: "red" }}>
        {"Styled text"}
      </Typography>
    );

    const styledText = screen.getByText("Styled text");
    expect(styledText).toHaveStyle("color: red");
  });
});
