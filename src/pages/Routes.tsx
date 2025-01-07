import { Suspense } from 'react';
import LoadingPage from '../component/ui/Loading';
import { Route, Routes as ReactRoutes, Navigate } from 'react-router-dom';
import MainLayout from '../component/Layout/MainLayout';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

const Routes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ReactRoutes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/list' element={<ProjectList />} />
          <Route path='/details/:id' element={<ProjectDetails />} />
          <Route path='*' element={<Navigate to='/list' />} />
        </Route>
      </ReactRoutes>
    </Suspense>
  );
};

export default Routes;
