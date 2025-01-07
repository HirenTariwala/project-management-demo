import { FormProps, Form as AntdForm } from 'antd';
import { ReactNode } from 'react';
interface Props extends FormProps {
  children: ReactNode;
}
const Form = ({ children, ...props }: Props) => (
  <AntdForm {...props}>{children}</AntdForm>
);

export { Form };
