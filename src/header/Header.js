import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import "./Header.css";


/* when we want to embed any javascript logic in JSX then 
we need to use JSX expression {} */

export function Header(){
    let [companyName, setCompany]=useState("");
    let applicationName="NEOSOFT's EMPLOYEES CRUD";
    let styleClass="myHeader";
    let decorations=['text-danger', 'text-center']
    // JS in react way
    /* extended javascript : JSX */
        function getData(data){
            console.log(data);
            setCompany(data);
        }
    return(
        <header className={styleClass}>
            <h2 className={decorations.join(" ")}>{applicationName}<small> {companyName}</small></h2>
            <Navbar applicationName={applicationName} getData={getData}></Navbar> 
        </header>
    );
}