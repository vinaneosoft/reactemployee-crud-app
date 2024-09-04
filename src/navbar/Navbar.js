import { useContext, useEffect, useRef, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MyContext } from "..";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useSelector, useDispatch} from "react-redux";
import { setUser } from "../features/admin/loginSlice";
export function Navbar(props){
  const username= useSelector((storestate)=>storestate.user.value);
  const dispatch=useDispatch();
  let companyName="Neosoft";
  let contextData=useContext(MyContext)
  const cookies = new Cookies();
 // let [admin, setAdmin]=useState(cookies.get('neoadmin')); // react store useSelector
 
  function logOut(){
    cookies.remove("neoadmin");
    dispatch(setUser(""));
  }
  useEffect(()=>{
    props.getData(companyName);
  },[])
  return (
  <nav className="navbar navbar-expand-md bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="home">{props.applicationName}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link"  to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="employees">Show Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="addemployee">Add Employee</Link>
          </li>
        </ul>
        <SearchBar></SearchBar>
        <ul className="navbar-nav mb-2 mb-lg-0">
          {username==="" || username===undefined ? <li className="nav-item">
            <Link className="nav-link text-info" to="login" >Admin Login</Link>
          </li> :  <li className="nav-item">
            <button className="nav-link text-info btn btn-link" onClick={logOut}>Logout</button>
          </li> }
         
        </ul>
        <div>
            <small>{contextData}</small>
        </div>
      </div>
    </div>
  </nav>
  );
}