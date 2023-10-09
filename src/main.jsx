import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import Root from './Components/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './Components/ContactUs/Contact';
import Gallery from './Components/Gallery/Gallery';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import PrivateRoutes from './Routes/PrivateRoutes';
import Services from './Components/Services/Services';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Employe from './Components/Employe/Employe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: ()=> fetch('/services.json')
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/employe",
        element: <Employe></Employe>,
        loader: ()=> fetch('/employe.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/service/:id",
        element: <PrivateRoutes><ServiceDetail></ServiceDetail></PrivateRoutes>,
        loader: ()=> fetch("/services.json")
      },
      
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
