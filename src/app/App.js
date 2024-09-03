import React, {  useState } from 'react';
import './App.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { MyContext } from '..';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() { // capital case
// java logic

let [baseLocAddress, setAddress] =useState("Ruby Tower, Dadar");
  setTimeout(()=>{
    setAddress("Sigma IT Park, Rabale")
  }, 5000)

  return (
    <Provider store={store}>
    <MyContext.Provider value={baseLocAddress}>
      <React.Fragment> 
        <h1 className="mainHeading">EMPLOYEE MANAGEMENT</h1>
        <p>{baseLocAddress}</p>
        <Header></Header>  
        <Outlet></Outlet> {/* Outlet of Router, which route gets matched, that child will be out */}
        <Footer></Footer>
      </React.Fragment>
    </MyContext.Provider>
    </Provider>
  );
}

export default App;
