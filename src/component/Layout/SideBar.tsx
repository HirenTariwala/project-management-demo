import { Layout, Menu, Typography } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import React from 'react';
import { useProject } from 'contexts/ProjectProvider';

const SideBar = () => {
  const { favoriteProjects } = useProject();
  const items = favoriteProjects?.map((item) => ({
    key: item.id,
    icon: React.createElement(ProjectOutlined),
    label: item.name,
  }));

  return (
    <Layout.Sider breakpoint='lg' collapsedWidth='0' width={246}>
      <Typography.Title level={3}>
        <span className='text-white flex items-center justify-center w-full pt-7 pb-3'>
          Favorite Projects
        </span>
      </Typography.Title>
      <Menu
        className='[&_.ant-menu-item-selected]:bg-blue-700 [&_.ant-menu-item]:rounded-none'
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['4']}
        items={items}
      />
    </Layout.Sider>
  );
};

export default SideBar;
