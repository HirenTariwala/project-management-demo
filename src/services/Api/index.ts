import { UpdateProjectDetailsArg } from './type';

const data = [
  {
    id: 'project_a',
    name: 'Project A',
    startDate: '2024-01-01',
    endDate: '2025-12-31',
    projectManager: 'John Doe',
    description: 'Test Project A',
  },
  {
    id: 'project_b',
    name: 'Project B',
    startDate: '2024-02-01',
    endDate: '2025-11-30',
    projectManager: 'Alice Smith',
    description: 'Test Project B',
  },
  {
    id: 'project_c',
    name: 'Project C',
    startDate: '2024-03-01',
    endDate: '2025-10-31',
    projectManager: 'Bob Johnson',
    description: 'Test Project C',
  },
  {
    id: 'project_d',
    name: 'Project D',
    startDate: '2024-04-01',
    endDate: '2025-09-30',
    projectManager: 'Charlie Lee',
    description: 'Test Project D',
  },
  {
    id: 'project_e',
    name: 'Project E',
    startDate: '2024-05-01',
    endDate: '2025-08-31',
    projectManager: 'David Harris',
    description: 'Test Project E',
  },
  {
    id: 'project_f',
    name: 'Project F',
    startDate: '2024-06-01',
    endDate: '2025-07-31',
    projectManager: 'Eve Williams',
    description: 'Test Project F',
  },
  {
    id: 'project_g',
    name: 'Project G',
    startDate: '2024-07-01',
    endDate: '2025-06-30',
    projectManager: 'Frank Davis',
    description: 'Test Project G',
  },
];

const fetchData = (id?: string) => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.2;
    setTimeout(() => {
      if (isSuccess) {
        if (id) {
          const project = data.find((item) => item.id === id);
          resolve(project);
        } else {
          resolve(data);
        }
      } else {
        reject('Failed to fetch projects due to an error.');
      }
    }, 1000);
  });
};

const updateProjectDetails = ({ variables }: UpdateProjectDetailsArg) => {
  const { id, ...updatedProjectData } = variables;
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.2;
    setTimeout(() => {
      const projectIndex = data.findIndex((project) => project.id === id);
      if (projectIndex === -1) {
        reject('Project not found.');
      } else {
        if (isSuccess) {
          data[projectIndex] = { ...data[projectIndex], ...updatedProjectData };
          resolve(data[projectIndex]);
        } else {
          reject('Failed to update project due to an error.');
        }
      }
    }, 1000);
  });
};

export { fetchData, updateProjectDetails };
