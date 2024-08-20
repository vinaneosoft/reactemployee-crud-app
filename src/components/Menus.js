import { useRef, useState } from "react";
import { NonVegMenus } from "./NonVegMenus";
import { VegMenus } from "./VegMenus";


export function Menus(){

        let selectNode=useRef();
        let [foodtype, setType]=useState("both");
    let template;

    if(foodtype=="veg")
        template=<VegMenus></VegMenus>
    else if(foodtype=="nonveg")
        template=<NonVegMenus></NonVegMenus>
    else
        template=<>
                    <VegMenus></VegMenus>
                    <NonVegMenus></NonVegMenus>
                </>
    return(
        <>
            <h3>MAIN COURSE</h3>
            <select ref={selectNode} defaultValue="both" onChange={()=>setType(selectNode.current.value)}>
                <option value="veg">VEG</option>
                <option value="nonveg">NON VEG</option>
                <option value="both">BOTH</option>
            </select>
           
            {template}
            <hr></hr>
            {/* logical && is used as if condition in template*/}
            {
                foodtype=="veg" &&  <VegMenus></VegMenus>   
            }
               
        </>
    )
}