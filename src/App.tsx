import React from 'react';
import Routes from './pages/Routes';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, App as AntdApp } from 'antd';
import ProjectProvider from 'contexts/ProjectProvider';

const App = () => (
  <ConfigProvider>
    <AntdApp>
      <ProjectProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ProjectProvider>
    </AntdApp>
  </ConfigProvider>
);

export default App;
