import { Navbar } from "../navbar/Navbar";
import "./Header.css";


/* when we want to embed any javascript logic in JSX then 
we need to use JSX expression {} */

export function Header(){
    let applicationName="EMPLOYEE CRUD PROJECT";
    let styleClass="myHeader";

    let decorations=['text-danger', 'text-center']
    // JS in react way

    /* extended javascript : JSX */
    return(
        <header className={styleClass}>
            <h2 className={decorations.join(" ")}>{applicationName}</h2>
            <Navbar></Navbar> 
        </header>
    );
}