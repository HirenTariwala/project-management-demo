import ListCard from "./ListCard";
import ListTable from "./ListTable";

const ProjectList = () => (
  <>
    <div className="hidden lg:block">
      <ListTable />
    </div>
    <div className="block lg:hidden">
      <ListCard />
    </div>
  </>
);

export default ProjectList;
