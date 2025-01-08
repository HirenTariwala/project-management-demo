import { Card, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useProject } from "contexts/ProjectProvider";
import dayjs from "dayjs";
import DATE_FORMAT from "constants/dateFormat";
import { useNavigate } from "react-router-dom";
import Button from "component/ui/Button";
import Typography from "component/ui/Typography";

const ListCard = () => {
  const { data } = useProject();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 [&_.ant-card-body]:p-0">
      {data?.map((project) => (
        <Card
          key={project.id}
          loading={false}
          actions={[]}
          className="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition min-w-[250px]"
        >
          <div className="rounded-t-lg px-4 pt-3 border-b">
            <Typography
              typographyType="title"
              level={4}
              className="text-white text-base font-semibold"
            >
              {project.name}
              <Button
                icon={<EditOutlined />}
                onClick={() => navigate(`/projects/${project.id}/edit`)}
                className=" text-black  transition  float-right mr-4"
              >
                Edit
              </Button>
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