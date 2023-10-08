import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import ProjectDetails from './Components/Home/Projects/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: '/projectDetails/:id',
    element: <ProjectDetails></ProjectDetails>
  }
]);

// Use ReactDOM.createRoot().render() to render your application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
