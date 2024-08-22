import React from 'react';
import './App.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Learning } from '../components/Learning';
import { Menus } from '../components/Menus';
import { Employees } from '../components/Employees';
import { EmployeeForm } from '../components/EmployeeForm';
import { Hooks } from '../components/Hooks';
import { MyContext } from '..';
function App() { // capital case
// java logic

let baseLocAddress ="Ruby Tower, Dadar";

  return (
    <MyContext.Provider value={baseLocAddress}>
    <React.Fragment> 
      <h1 className="mainHeading">EMPLOYEE MANAGEMENT</h1>
      <Header></Header>  
      <div>
        Other components will get added later here
        <Hooks></Hooks>
        <hr></hr>
        <hr></hr>
        <Hooks></Hooks>
      </div>
      <Footer></Footer>
    </React.Fragment>
     </MyContext.Provider>
  );
}

export default App;
