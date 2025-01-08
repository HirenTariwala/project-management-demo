import {
  CreateProjectDetailsArg,
  ProjectData,
  UpdateProjectDetailsArg,
} from "./type";

const data: Partial<ProjectData>[] = [
  {
    id: "project_a",
    name: "Project A",
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    projectManager: "John Doe",
    description: "Test Project A",
    favourite: true,
  },
  {
    id: "project_b",
    name: "Project B",
    startDate: "2024-02-01",
    endDate: "2025-11-30",
    projectManager: "Alice Smith",
    description: "Test Project B",
    favourite: true,
  },
  {
    id: "project_c",
    name: "Project C",
    startDate: "2024-03-01",
    endDate: "2025-10-31",
    projectManager: "Bob Johnson",
    description: "Test Project C",
    favourite: false,
  },
  {
    id: "project_d",
    name: "Project D",
    startDate: "2024-04-01",
    endDate: "2025-09-30",
    projectManager: "Charlie Lee",
    description: "Test Project D",
    favourite: false,
  },
  {
    id: "project_e",
    name: "Project E",
    startDate: "2024-05-01",
    endDate: "2025-08-31",
    projectManager: "David Harris",
    description: "Test Project E",
    favourite: false,
  },
  {
    id: "project_f",
    name: "Project F",
    startDate: "2024-06-01",
    endDate: "2025-07-31",
    projectManager: "Eve Williams",
    description: "Test Project F",
    favourite: false,
  },
  {
    id: "project_g",
    name: "Project G",
    startDate: "2024-07-01",
    endDate: "2025-06-30",
    projectManager: "Frank Davis",
    description: "Test Project G",
    favourite: false,
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
        reject("Failed to fetch project details due to an error.");
      }
    }, 1000);
  });
};

const updateProjectDetails = ({
  variables,
  favouriteChange,
}: UpdateProjectDetailsArg) => {
  const { id, ...updatedProjectData } = variables;
  return new Promise((resolve, reject) => {
    const isSuccess = favouriteChange ? true : Math.random() > 0.2;
    const projectIndex = data.findIndex((project) => project.id === id);
    setTimeout(() => {
      if (projectIndex === -1) {
        reject("Project not found.");
      } else {
        if (isSuccess) {
          data[projectIndex] = { ...data[projectIndex], ...updatedProjectData };
          resolve(data[projectIndex]);
        } else {
          reject("Failed to update project due to an error.");
        }
      }
    }, 1000);
  });
};

const createNewProject = ({ variables }: CreateProjectDetailsArg) => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.2;
    const projectIndex = data.findIndex(
      (project) => project.id === variables.id
    );

    setTimeout(() => {
      if (projectIndex === 0) {
        reject("Project is already exist with this ID.");
      } else {
        if (isSuccess) {
          data.unshift(variables);
          resolve(variables);
        } else {
          reject("Failed to create project due to an error.");
        }
      }
    }, 1000);
  });
};

export { fetchData, updateProjectDetails, createNewProject };
