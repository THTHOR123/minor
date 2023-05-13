import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home';
import CreateResume from './CreateResume';
import PersonalInfoForm from './PersonalInfoForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create-resume',
    element: <CreateResume />,
  },

  {
    path:'/Home',
    element:<Home/>
  },

  {
    path: '/PersonalInfoForm',
    element:<PersonalInfoForm/>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      {/* Your app content goes here */}
    </RouterProvider>
  );
};

export default App;
