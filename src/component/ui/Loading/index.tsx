import { Spin } from 'antd';

export const LoadingPage = () => (
  <div className='h-[100%] w-[100%] flex justify-center p-5 items-center'>
    <Spin spinning delay={500} size='large' />
  </div>
);

export default LoadingPage;
