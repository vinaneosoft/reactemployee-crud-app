import { useRef } from "react";

export function SearchBar({getEmp}){
        const searchNode=useRef();
        return(
            <>
                <label htmlFor="_id">Enter Id to Search Employee : </label>
                <input ref={searchNode} id="_id" type="search" onKeyUp={()=>getEmp(searchNode.current.value)} placeholder="Search" aria-label="Search" />
            </>
        );
    
}