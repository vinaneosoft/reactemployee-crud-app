import { Component } from "react";


export class SearchBar extends Component{
    render(){
        return(
            <form className="d-flex" role="search">
                <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        );
    }
}