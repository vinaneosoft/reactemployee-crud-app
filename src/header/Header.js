import { Navbar } from "../navbar/Navbar";
import "./Header.css";

export function Header(){

    return(
        <header className="myHeader">
            <h2 className="text-danger">EMPLOYEE CRUD PROJECT</h2>
            <Navbar></Navbar>
        </header>
    );
}