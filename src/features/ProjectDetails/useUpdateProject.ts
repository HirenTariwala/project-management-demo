import { App as AntdApp } from 'antd';
import { useForm } from 'antd/es/form/Form';
import DATE_FORMAT from 'constants/dateFormat';
import { useProject } from 'contexts/ProjectProvider';
import dayjs from 'dayjs';
import { Project } from 'Model/Project';
import { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from 'services/Api';

const useUpdateProject = () => {
  const { notification } = AntdApp.useApp();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, updateProject } = useProject();
  const [form] = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFieldChange, setIsFieldChanged] = useState<boolean>(false);

  const onSubmitHandler = (value: Project) => {
    updateProject(value,() => navigate('/list'));
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
    onSubmitHandler,
    form,
    id,
    navigate,
    loading,
    setIsFieldChanged,
    isFieldChange,
  };
};

export default useUpdateProject;
