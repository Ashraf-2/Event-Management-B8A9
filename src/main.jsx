import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import Root from './Components/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './Components/ContactUs/Contact';
import Stuffs from './Components/Stuffs/Stuffs';
import Gallery from './Components/Gallery/Gallery';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/stuffs",
        element: <Stuffs></Stuffs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
