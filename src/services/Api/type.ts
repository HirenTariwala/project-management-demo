export interface ProjectData {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  projectManager: string;
  description: string;
  isFavorite?: boolean;
}

export interface UpdateProjectDetailsArg {
  variables: Partial<ProjectData>;
  shouldUpdateFavorite?: boolean;
}

export interface CreateProjectDetailsArg {
  variables: Partial<ProjectData>;
}
