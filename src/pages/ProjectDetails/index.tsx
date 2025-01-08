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
        autoComplete="off"
      >
        <FormItem
          label="Project ID"
          name="id"
          className="pb-0"
          colon={false}
          required={false}
        >
          <div className="flex items-center justify-between">
            <Typography>{id}</Typography>
            <Button type="link" className="p-0" onClick={updateFavoriteState}>
              <Icon name={favourite ? "fillBookmark" : "unfillBookmark"} />
            </Button>
          </div>
        </FormItem>
        <FormItem
          label="Project Name"
          name="name"
          colon={false}
          className="pb-0"
          required={false}
        >
          <Typography>{name}</Typography>
        </FormItem>

        <FormItem
          label="Description"
          name="description"
          colon={false}
          required={false}
        >
          <Typography>{description}</Typography>
        </FormItem>

        <FormItem
          className="[&_.ant-picker]:w-full pb-0"
          label="Start Date"
          name="startDate"
          colon={false}
          required={false}
        >
          <Typography>{startDate}</Typography>
        </FormItem>
        <FormItem
          className="[&_.ant-picker]:w-full"
          label="End Date"
          name="endDate"
          colon={false}
          required={false}
        >
          <Typography>{endDate}</Typography>
        </FormItem>
        <FormItem
          label="Project Manager"
          name="projectManager"
          colon={false}
          required={false}
        >
          <Typography>{projectManager}</Typography>
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
