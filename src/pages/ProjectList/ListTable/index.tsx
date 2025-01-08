import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useProject } from "contexts/ProjectProvider";
import { Project } from "Model/Project";
import dayjs from "dayjs";
import DATE_FORMAT from "constants/dateFormat";
import { useNavigate } from "react-router-dom";
import Button from "component/ui/Button";
import Typography from "component/ui/Typography";
import Icon from "component/ui/Icons";

const ListTable = () => {
  const { data, loading, updateProject } = useProject();
  const navigate = useNavigate();

  const columns: ColumnsType<Project> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <Button
          type="link"
          className="p-0"
          onClick={() => navigate(`/projects/${id}`)}
        >
          <Typography>{id}</Typography>
        </Button>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (_, { startDate }) => (
        <Typography>{dayjs(startDate).format(DATE_FORMAT.primary)}</Typography>
      ),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (_, { endDate }) => (
        <Typography>{dayjs(endDate).format(DATE_FORMAT.primary)}</Typography>
      ),
    },
    {
      title: "Project Manager",
      dataIndex: "projectManager",
      key: "projectManager",
    },
    {
      key: "favourite",
      render: (_, { id, favourite }) => (
        <div className="flex items-center gap-2">
          <Button
            type="link"
            className="p-0"
            onClick={() =>
              updateProject({ id, favourite: !favourite }, () => {}, true)
            }
          >
            <Icon name={favourite ? "fillBookmark" : "unfillBookmark"} />
          </Button>
          <Button
            type="primary"
            onClick={() => {
              navigate(`/projects/${id}/edit`);
            }}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex-1 pb-12">
        <Button
          type="primary"
          className="float-end"
          onClick={() => navigate("/projects/new")}
        >
          Create Project
        </Button>
      </div>
      <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default ListTable;
