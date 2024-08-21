import { useRef, useState } from "react";
import { NonVegMenus } from "./NonVegMenus";
import { VegMenus } from "./VegMenus";


export function Menus(){

        let [searchItem, setItem]=useState("");
        let itemNode=useRef();
        let selectNode=useRef();
        let [foodtype, setType]=useState("both");
    let template;

    if(foodtype=="veg")
        template=<VegMenus item={searchItem}></VegMenus>
    else if(foodtype=="nonveg")
        template=<NonVegMenus item={searchItem}></NonVegMenus>
    else
        template=<>
                    <VegMenus item={searchItem}></VegMenus>
                    <NonVegMenus  item={searchItem}></NonVegMenus>
                </>
    return(
        <>
            <h3>MAIN COURSE</h3>
            <select ref={selectNode} defaultValue="both" onChange={()=>setType(selectNode.current.value)}>
                <option value="veg">VEG</option>
                <option value="nonveg">NON VEG</option>
                <option value="both">BOTH</option>
            </select>
            <label>Enter food to search</label>
            <input type="text" ref={itemNode} onKeyUp={()=>setItem(itemNode.current.value)}></input>
            {template}
            <hr></hr>
            {/* logical && is used as if condition in template*/}
            {
               /*  foodtype=="veg" &&  <VegMenus></VegMenus>    */
            }
               
        </>
    )
}