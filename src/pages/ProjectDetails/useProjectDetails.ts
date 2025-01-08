/* eslint-disable react-hooks/exhaustive-deps */
import { App as AntdApp } from "antd";
import { useProject } from "contexts/ProjectProvider";
import { Project } from "Model/Project";
import { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "services/Api";

const useProjectDetails = () => {
  const { notification } = AntdApp.useApp();
  const { updateProject } = useProject();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState<Project>();

  const fetchProjectDetailsById = () => {
    if (id) {
      fetchData(id)
        .then((response) => {
          setLoading(false);
          const data = response as Project;
          setProjectDetails(data);
        })
        .catch((error) => {
          setLoading(false);
          navigate("/projects");
          notification.error({
            message: error,
          });
        });
    }
  };

  useLayoutEffect(() => {
    setLoading(true);
    fetchProjectDetailsById();
  }, [id, notification]);

  const updateFavoriteState = async () => {
    setLoading(true);
    updateProject(
      { id, isFavorite: !projectDetails?.isFavorite },
      () => {},
      true
    );
    fetchProjectDetailsById();
  };

  return {
    loading,
    projectDetails,
    navigate,
    updateFavoriteState,
  };
};

export default useProjectDetails;
