import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home/Home.jsx';
import Search from './routes/Search/Search.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <Error />,
    children:[
      {path: "/", element:<Home />},
      {path: "search", element:<Search />},
    ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)