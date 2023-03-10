import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import ProjectOne from "./pages/projectOne/ProjectOne.jsx"
import ProjectTwo from "./pages/projectTwo/ProjectTwo.jsx"
import Root from './root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ProjectOne",
    element: <ProjectOne />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ProjectTwo",
    element: <ProjectTwo />,
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
