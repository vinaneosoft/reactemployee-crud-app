import { useEffect, useState } from "react";

// components get rerendered when state change happens
// useState is hook function used to manage state of properties (variable, object, array)

export function Learning(){
    let [sum, setSum]=useState(0); 

    let test=()=>{
        console.log("Function called");  
    }
    let test2=(event)=>{
        console.log(event);  
    }
    let add=(...args)=>{
        let result=args.reduce((acc, ele)=>acc+ele)
        setSum(result);
       // sum=result;
    }
    useEffect(()=>{
        console.log("Component rendered......");
        console.log(sum);
    });
    return (
        <>
            <button onClick={test}>CLICK</button>
            <p onMouseOver={test2}>
                HI
            </p>
            <button onClick={()=>add(45,789,3455,2444)}>CLICK</button>
            <p>
                <b>Sum is {sum}</b>
            </p>
        </>
    );
}