import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sections from './Sections/Sections';
import Add from './Add/Add';
import Detail from './Detail/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Sections/>,
      },
      {
        path: 'add',
        element: <Add/>,
      },
      {
        path: 'detail/:flowerID',
        element: <Detail/>,
      },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


