import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import AuthProvider from './components/Provider/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import AllJewelry from './components/AllJewelry';
import AddJewelry from './AddJewelry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
      element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/alljewelry',
        element: <AllJewelry></AllJewelry>
      },
      {
        path: '/addjewelry',
        element: <AddJewelry></AddJewelry>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
