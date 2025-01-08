import Button from "component/ui/Button";
import { Form, FormItem } from "component/ui/Form";
import Typography from "component/ui/Typography";
import LoadingPage from "component/ui/Loading";
import useProjectDetails from "./useProjectDetails";
import Icon from "component/ui/Icons";

const ProjectDetails = () => {
  const { projectDetails, loading, updateFavoriteState, navigate } =
    useProjectDetails();

  const {
    id,
    name,
    startDate,
    endDate,
    projectManager,
    description,
    favourite,
  } = projectDetails || {};

  if (loading) return <LoadingPage />;
  return (
    <div className="ml-5">
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className="max-w-[600px] min-w-[203px]"
      >
        <FormItem
          label="Project ID:"
          name="id"
          className="pb-0 relative flex-row font-bold justify-between align-center"
          colon={false}
        >
          <div className="flex items-center justify-between">
            <Typography className="font-normal">{id}</Typography>
          </div>
          <Button
            type="link"
            className="p-0 absolute -top-10 md:top-0 right-0"
            onClick={updateFavoriteState}
          >
            <Icon name={favourite ? "fillBookmark" : "unfillBookmark"} />
          </Button>
        </FormItem>
        <FormItem
          label="Project Name:"
          name="name"
          colon={false}
          className="pb-0 font-bold"
        >
          <Typography className="font-normal">{name}</Typography>
        </FormItem>

        <FormItem
          label="Description:"
          className="font-bold"
          name="description"
          colon={false}
        >
          <Typography className="font-normal">{description}</Typography>
        </FormItem>

        <FormItem
          className="[&_.ant-picker]:w-full pb-0 font-bold"
          label="Start Date:"
          name="startDate"
          colon={false}
        >
          <Typography className="font-normal">{startDate}</Typography>
        </FormItem>
        <FormItem
          className="[&_.ant-picker]:w-full font-bold"
          label="End Date:"
          name="endDate"
          colon={false}
        >
          <Typography className="font-normal">{endDate}</Typography>
        </FormItem>
        <FormItem
          className="font-bold"
          label="Project Manager:"
          name="projectManager"
          colon={false}
        >
          <Typography className="font-normal">{projectManager}</Typography>
        </FormItem>
        <FormItem className="flex md:ml-[120px] [&_.ant-col]:m-0">
          <div className="flex gap-6">
            <Button type="primary" onClick={() => navigate("/projects")}>
              Back
            </Button>
            <Button
              type="primary"
              onClick={() => navigate(`/projects/${id}/edit`)}
            >
              Edit
            </Button>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

export default ProjectDetails;
