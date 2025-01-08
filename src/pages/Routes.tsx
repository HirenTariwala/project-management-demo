import { Suspense } from "react";
import LoadingPage from "../component/ui/Loading";
import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import MainLayout from "../component/Layout/MainLayout";
import ProjectList from "./ProjectList";
import CreateNewProject from "./CreateNewProject";
import EditProjectDetails from "./EditProjectDetails";
import ProjectDetails from "./ProjectDetails";

const Routes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ReactRoutes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id/edit" element={<EditProjectDetails />} />
          <Route path="/projects/new" element={<CreateNewProject />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Navigate to="/projects" />} />
        </Route>
      </ReactRoutes>
    </Suspense>
  );
};

export default Routes;
