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
import { FileUpload } from './components/FileUpload';
import { getAllEmployees, getEmployeeById } from './model/EmployeeCRUD';

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
    path:'fileupload/:_id',
    element:<FileUpload />
  },
  {
    path:'employees',
    element:<Employees />
  },
  {
    path:'addemployee',
    element:<EmployeeForm></EmployeeForm>
  },
  {
    path:'editemployee/:empId',   // custom variable name
    element:<EmployeeForm></EmployeeForm>,
    loader:async ({params})=>{
      return await getEmployeeById(params.empId)
    },
    shouldRevalidate: () => false
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
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
