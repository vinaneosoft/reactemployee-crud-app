import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { Employees } from './components/Employees';
import { EmployeeForm } from './components/EmployeeForm';
import { Home } from './components/Home';
import { AdminLogin } from './components/AdminLogin';

export let MyContext= React.createContext();

let childRoutes=[
  {
    path:'/',
    loader:()=>redirect('home')
  },
  {
    path:'home',
    element:<Home />
  },
  {
     path:'employees',
    element:<Employees />
  },
  {
    path:'employeeinput',
    element:<EmployeeForm></EmployeeForm>
  },
  {
    path:'login',
    element:<AdminLogin></AdminLogin>
  }
]

const router= createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:childRoutes
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
