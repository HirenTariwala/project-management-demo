import { Card, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useProject } from "contexts/ProjectProvider";
import dayjs from "dayjs";
import DATE_FORMAT from "constants/dateFormat";
import { useNavigate } from "react-router-dom";
import Button from "component/ui/Button";
import Typography from "component/ui/Typography";
import Icon from "component/ui/Icons";

const ListCard = () => {
  const { data, updateProject } = useProject();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 [&_.ant-card-body]:p-0">
      <div className="flex-1 -mb-2">
        <Button
          type="primary"
          className="float-end"
          onClick={() => navigate("/projects/new")}
        >
          Create Project
        </Button>
      </div>
      {data?.map((project) => (
        <Card
          key={project.id}
          loading={false}
          actions={[]}
          onClick={() => navigate(`/projects/${project.id}`)}
          className="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition min-w-[250px]"
        >
          <div className="rounded-t-lg px-4 pt-3 border-b">
            <Typography
              typographyType="title"
              level={4}
              className="flex justify-between text-white text-base font-semibold"
            >
              {project.name}
              <div className="flex">
                <Button
                  icon={<EditOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/projects/${project.id}/edit`);
                  }}
                  className=" text-black  transition  float-right mr-4"
                >
                  Edit
                </Button>
                <Button
                  type="link"
                  className="p-0"
                  onClick={() =>
                    updateProject(
                      { id: project?.id, isFavorite: !project.isFavorite },
                      () => {},
                      true
                    )
                  }
                >
                  <Icon
                    name={
                      project?.isFavorite ? "fillBookmark" : "unfillBookmark"
                    }
                  />
                </Button>
              </div>
            </Typography>
          </div>

          <Card.Meta
            description={
              <Space
                direction="vertical"
                size={4}
                className="text-gray-700 p-4"
              >
                <Typography strong>Project ID: {project.id}</Typography>
                <Typography>
                  <strong>Start Date: </strong>
                  {dayjs(project.startDate).format(DATE_FORMAT.primary)}
                </Typography>
                <Typography>
                  <strong>End Date: </strong>
                  {dayjs(project.endDate).format(DATE_FORMAT.primary)}
                </Typography>
                <Typography>
                  <strong>Project Manager: </strong>
                  {project.projectManager}
                </Typography>
              </Space>
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default ListCard;
