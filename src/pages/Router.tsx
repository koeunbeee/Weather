import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from '../pages/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
