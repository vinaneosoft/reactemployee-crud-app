import { useRef } from "react";

export function SearchBar({getEmp}){
        const searchNode=useRef();
        return(
            <>
                <input ref={searchNode} type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" onClick={()=>getEmp(searchNode.current.value)}>Search</button>
            </>
        );
    
}