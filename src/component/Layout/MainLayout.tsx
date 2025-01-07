import { Layout } from 'antd';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';

const { Content } = Layout;

const MainLayout = () => {
  const location = useLocation();
  if (location.pathname === '/') return <Navigate to='app' />;

  return (
    <StyledLayout>
      <SideBar />
      <InnerLayout id='content_layout'>
        <StyledContent>
          <Outlet />
        </StyledContent>
      </InnerLayout>
    </StyledLayout>
  );
};

export default MainLayout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  max-height: 100vh;
`;

const InnerLayout = styled(Layout)`
  overflow-y: auto;
`;

const StyledContent = styled(Content)`
  &.ant-layout-content {
    position: relative;
    min-height: initial;
    padding: 28px 36px;
  }
`;
