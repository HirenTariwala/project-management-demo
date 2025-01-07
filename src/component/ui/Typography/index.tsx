import React from 'react';
import { Typography as AntdTypography } from 'antd';

type AntdTextProps = React.ComponentProps<typeof AntdTypography.Text>;
type AntdTitleProps = React.ComponentProps<typeof AntdTypography.Title>;
type AntdParagraphProps = React.ComponentProps<typeof AntdTypography.Paragraph>;
type TypographyType = { typographyType?: 'title' | 'paragraph' | 'text' };

const Typography: React.FC<
  TypographyType & (AntdTextProps | AntdTitleProps | AntdParagraphProps)
> = ({ typographyType = 'text', children, ...rest }) => {
  switch (typographyType) {
    case 'title':
      return <AntdTypography.Title {...rest}>{children}</AntdTypography.Title>;
    case 'paragraph':
      return (
        <AntdTypography.Paragraph {...rest}>
          {children}
        </AntdTypography.Paragraph>
      );
    case 'text':
    default:
      return <AntdTypography.Text {...rest}>{children}</AntdTypography.Text>;
  }
};

export default Typography;
