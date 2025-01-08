import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "../Form";
import { Input } from "antd";

describe("FormItem component", () => {
  it("should render the children passed to the Form", () => {
    render(
      <Form>
        <div>Test Child</div>
      </Form>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("should not trigger onFinish if validation fails", async () => {
    const handleFinish = jest.fn();
    render(
      <Form onFinish={handleFinish}>
        <Input placeholder="Test Input" name="username" required />
      </Form>
    );

    fireEvent.submit(screen.getByPlaceholderText("Test Input"));
    expect(handleFinish).not.toHaveBeenCalled();
  });
});
