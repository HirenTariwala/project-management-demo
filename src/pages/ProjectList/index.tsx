import ListCard from 'features/ProjectCard/ListCard';
import ListTable from 'features/ProjectsList/ListTable';

const ProjectList = () => (
  <>
    <div className='hidden lg:block'>
      <ListTable />
    </div>
    <div className='block lg:hidden'>
      <ListCard />
    </div>
  </>
);

export default ProjectList;
