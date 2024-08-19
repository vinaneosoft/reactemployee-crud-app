import { Navbar } from "../navbar/Navbar";
import "./Header.css";


/* when we want to embed any javascript logic in JSX then 
we need to use JSX expression {} */

export function Header(){
    let applicationName="EMPLOYEE CRUD PROJECT";
    let styleClass="myHeader";

    // JS in react way

    /* extended javascript : JSX */
    return(
        <header className={styleClass}>
            <h2 className="text-danger">{applicationName}</h2>
            <h3>CRUD</h3>
            <Navbar></Navbar> 
        </header>
    );
}