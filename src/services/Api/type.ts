export interface ProjectData {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  projectManager: string;
  description: string;
}

export interface UpdateProjectDetailsArg {
  variables: Partial<ProjectData>;
}
