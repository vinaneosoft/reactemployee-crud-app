import React from 'react';
import './App.css';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

function App() { // capital case
// java logic


  return (
    <React.Fragment> 
      <h1 className="mainHeading">EMPLOYEE MANAGEMENT</h1>
      <Header></Header>  
      <div>
        Other components will get added later here

      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
