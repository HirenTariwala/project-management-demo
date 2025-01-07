import DATE_FORMAT from "constants/dateFormat";
import useUpdateProject from "./useUpdateProject";
import { DatePicker, InputText, InputTextArea } from "component/ui/InputFields";
import Button from "component/ui/Button";
import { Form, FormItem } from "component/ui/Form";
import Typography from "component/ui/Typography";
import LoadingPage from "component/ui/Loading";

const UpdateProjectDetails = () => {
  const {
    onSubmitHandler,
    form,
    id,
    navigate,
    loading,
    setIsFieldChanged,
    isFieldChange,
  } = useUpdateProject();
  if (loading) return <LoadingPage />;
  return (
    <div className="ml-5">
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className="max-w-[600px] min-w-[203px]"
        onFinish={onSubmitHandler}
        autoComplete="off"
        onFieldsChange={() => setIsFieldChanged(true)}
      >
        <FormItem
          label="Project Id"
          name="id"
          className="pb-0"
          colon={false}
          required={false}
        >
          <Typography>{id}</Typography>
        </FormItem>
        <FormItem
          label="Project Name"
          name="name"
          colon={false}
          className="pb-0"
          required={false}
          rules={[
            { required: true, message: "Please input your project name!" },
          ]}
        >
          <InputText />
        </FormItem>

        <FormItem
          label="Description"
          name="description"
          colon={false}
          required={false}
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <InputTextArea rows={4} />
        </FormItem>

        <FormItem
          className="[&_.ant-picker]:w-full pb-0"
          label="Start Date"
          name="startDate"
          colon={false}
          required={false}
          rules={[{ required: true, message: "Please input your start date!" }]}
        >
          <DatePicker format={DATE_FORMAT.primary} />
        </FormItem>
        <FormItem
          className="[&_.ant-picker]:w-full"
          label="End Date"
          name="endDate"
          colon={false}
          required={false}
          rules={[{ required: true, message: "Please input your end date!" }]}
        >
          <DatePicker format={DATE_FORMAT.primary} />
        </FormItem>
        <FormItem
          label="Project Manager"
          name="projectManager"
          colon={false}
          required={false}
          rules={[
            { required: true, message: "Please input your project manager!" },
          ]}
        >
          <InputText />
        </FormItem>
        <FormItem className="flex md:ml-[200px] [&_.ant-col]:m-0">
          <div className="flex gap-6">
            <Button type="primary" htmlType="submit" disabled={!isFieldChange}>
              Update
            </Button>
            <Button
              color="default"
              variant="filled"
              onClick={() => navigate("/list")}
            >
              cancel
            </Button>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

export default UpdateProjectDetails;
