import { useContext, useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { MyContext } from "..";
import { Link } from "react-router-dom";


export function Navbar(props){
  let companyName="Neosoft";
  let contextData=useContext(MyContext)

  useEffect(()=>{
    props.getData(companyName);
    console.log(contextData);
    
  }, [])
  return (
  <nav className="navbar navbar-expand-md bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="">{props.applicationName}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link"  href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <SearchBar></SearchBar>
        <div>
            <small>{contextData}</small>
        </div>
      </div>
    </div>
  </nav>
  );
}