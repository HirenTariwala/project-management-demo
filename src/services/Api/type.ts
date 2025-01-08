export interface ProjectData {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  projectManager: string;
  description: string;
  favourite?: boolean;
}

export interface UpdateProjectDetailsArg {
  variables: Partial<ProjectData>;
  favouriteChange?: boolean;
}

export interface CreateProjectDetailsArg {
  variables: Partial<ProjectData>;
}
