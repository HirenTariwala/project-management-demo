import useSafeContext from 'hooks/useSafeContext';
import { Project } from 'Model/Project';
import React, { useEffect, useState } from 'react';
import { fetchData, updateProjectDetails } from 'services/Api';
import { App as AntdApp } from 'antd';

export interface ProjectContextProps {
  data?: Project[];
  fetchProjectsData: () => void;
  updateProject: (variable: Partial<Project>, callback: () => void) => void;
  favoriteProjects?: Pick<Project, 'id' | 'name'>[];
}

export const ProjectContext = React.createContext<ProjectContextProps | null>(
  null
);
ProjectContext.displayName = 'Project';

export const useProject = () => useSafeContext(ProjectContext);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Project[]>([]);
  const { notification } = AntdApp.useApp();

  const fetchProjectsData = () => {
    fetchData()
      .then((response) => {
        const projects = response as Project[];
        if (projects?.length > 0) {
          setData(projects);
        }
      })
      .catch((error) => {
        notification.error({
          message: error,
        });
      });
  };

  const updateProject = (variables: Partial<Project>, callback: () => void) => {
    updateProjectDetails({ variables })
      .then((response) => {
        const updatedProject = response as Project;
        notification.success({ message: 'Project updated successfully.' });
        const newData = data.map((item) =>
          item.id === updatedProject.id ? updatedProject : item
        );
        setData([...newData]);
        callback();
      })
      .catch((error) => {
        notification.error({ message: error });
      });
  };

  const favoriteProjects = data
    .slice(0, 2)
    .map(({ id, name }) => ({ id, name }));

  useEffect(() => {
    if (!data?.length) {
      fetchProjectsData();
    }
  });

  return (
    <ProjectContext.Provider
      value={{
        data,
        fetchProjectsData,
        favoriteProjects,
        updateProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
