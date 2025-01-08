/* eslint-disable react-hooks/exhaustive-deps */
import useSafeContext from "hooks/useSafeContext";
import { Project } from "Model/Project";
import React, { useEffect, useState } from "react";
import {
  createNewProject,
  fetchData,
  updateProjectDetails,
} from "services/Api";
import { App as AntdApp } from "antd";

export interface ProjectContextProps {
  data?: Project[];
  loading: boolean;
  fetchProjectsData: () => void;
  updateProject: (
    variable: Partial<Project>,
    callback?: () => void,
    shouldUpdateFavorite?: boolean
  ) => void;
  createProject: (variable: Partial<Project>, callback: () => void) => void;
  favoriteProjects?: Pick<Project, "id" | "name">[];
}

export const ProjectContext = React.createContext<ProjectContextProps | null>(
  null
);
ProjectContext.displayName = "Project";

export const useProject = () => useSafeContext(ProjectContext);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { notification } = AntdApp.useApp();

  const fetchProjectsData = () => {
    setLoading(true);
    fetchData()
      .then((response) => {
        const projects = response as Project[];
        if (projects?.length > 0) {
          setData(projects);
        }
        setLoading(false);
      })
      .catch((error) => {
        notification.error({
          message: error,
        });
        setLoading(false);
      });
  };

  const updateProject = (
    variables: Partial<Project>,
    callback?: () => void,
    shouldUpdateFavorite?: boolean
  ) => {
    setLoading(true);
    updateProjectDetails({ variables, shouldUpdateFavorite })
      .then(() => {
        const message = shouldUpdateFavorite
          ? `Project ${
              variables?.isFavorite ? "added as" : "removed as"
            } favourite successfully.`
          : "Project updated successfully.";
        notification.success({ message: message });
        fetchProjectsData();
        callback?.();
      })
      .catch((error) => {
        notification.error({ message: error });
        setLoading(false);
      });
  };

  const createProject = (variables: Partial<Project>, callback: () => void) => {
    createNewProject({ variables })
      .then(() => {
        notification.success({ message: "New Project created successfully." });
        fetchProjectsData();
        callback();
      })
      .catch((error) => {
        notification.error({ message: error });
        setLoading(false);
      });
  };

  const favoriteProjects = data.filter((item) => item.isFavorite);

  useEffect(() => {
    fetchProjectsData();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        data,
        loading,
        favoriteProjects,
        fetchProjectsData,
        updateProject,
        createProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
