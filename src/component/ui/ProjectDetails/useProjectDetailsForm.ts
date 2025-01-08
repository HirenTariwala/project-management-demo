import { App as AntdApp } from "antd";
import { useForm } from "antd/es/form/Form";
import DATE_FORMAT from "constants/dateFormat";
import { useProject } from "contexts/ProjectProvider";
import dayjs from "dayjs";
import { Project } from "Model/Project";
import { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "services/Api";

const useProjectDetailsForm = (flow: "edit" | "create") => {
  const { notification } = AntdApp.useApp();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, updateProject, createProject } = useProject();
  const [form] = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFieldChange, setIsFieldChanged] = useState<boolean>(false);

  const onSubmitHandler = (formValues: Project) => {
    const values = {
      ...formValues,
      startDate: dayjs(formValues.startDate).format(DATE_FORMAT.primary),
      endDate: dayjs(formValues.endDate).format(DATE_FORMAT.primary),
    };
    if (flow === "edit") updateProject(values, () => navigate("/projects"));
    if (flow === "create") createProject(values, () => navigate("/projects"));

    setIsFieldChanged(false);
  };

  useLayoutEffect(() => {
    if (id) {
      setLoading(true);
      fetchData(id)
        .then((response) => {
          setLoading(false);
          const data = response as Project;
          form.setFieldsValue({
            ...data,
            startDate: data?.startDate
              ? dayjs(data?.startDate, DATE_FORMAT.primary)
              : undefined,
            endDate: data?.endDate
              ? dayjs(data?.endDate, DATE_FORMAT.primary)
              : undefined,
          });
        })
        .catch((error) => {
          setLoading(false);
          notification.error({
            message: error,
          });
        });
    }
  }, [data, form, id, notification]);

  return {
    form,
    id,
    loading,
    isFieldChange,
    navigate,
    onSubmitHandler,
    setIsFieldChanged,
  };
};

export default useProjectDetailsForm;
