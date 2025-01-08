import AntIcon, { EditOutlined, ProjectOutlined } from "@ant-design/icons";
import { forwardRef } from "react";
import CustomIcons from "./icons";

const ICON_SIZES = {
  small: "12px",
  medium: "14px",
  large: "18px",
  xlarge: "25px",
};

export const customIconList = {
  project: () => <ProjectOutlined />,
  edit: () => <EditOutlined />,
  fillBookmark: CustomIcons.FillBookmark,
  unfillBookmark: CustomIcons.UnfillBookmark,
};

export type ICustomIconList = keyof typeof customIconList;
export type ICustomIconSizes = keyof typeof ICON_SIZES;

interface IconProps {
  name: ICustomIconList;
  color?: string;
  size?: number;
  inline?: boolean;
  [x: string]: any;
}

const Icon = forwardRef<HTMLElement, IconProps>(
  ({ name, color, size, inline, ...props }, ref) => {
    let updatedProps = props;
    if (color) {
      updatedProps = {
        ...updatedProps,
        style: { ...updatedProps.style, color },
      };
    }
    if (size) {
      updatedProps = {
        ...updatedProps,
        style: { ...updatedProps.style, fontSize: size },
      };
    }

    if (inline) {
      updatedProps = {
        ...updatedProps,
        style: { ...updatedProps.style, display: "inline" },
      };
    }

    const IconSvg = customIconList[name as ICustomIconList];
    if (IconSvg)
      return (
        <AntIcon component={IconSvg} {...updatedProps} ref={ref} title="icon" />
      );
    return null;
  }
);

export default Icon;
