import { useEffect } from "react";
import { SearchBar } from "../components/SearchBar";


export function Navbar(props){
  let companyName="Neosoft";
  useEffect(()=>{
    props.getData(companyName);
  }, [])
  return (
  <nav className="navbar navbar-expand-md bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.applicationName}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <SearchBar></SearchBar>
      </div>
    </div>
  </nav>
  );
}