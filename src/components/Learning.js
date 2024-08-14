import { useEffect, useState } from "react";

// components get rerendered when state change happens
// useState is hook function used to manage state of properties (variable, object, array)

export function Learning(){
    let [sum, setSum]=useState(0); 
    let [subtraction, setSub]=useState(0);
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
    let sub=(...args)=>{
        let result=args.reduce((acc, ele)=>acc-ele)
        setSub(result);
       // sum=result;
    }
    /* 1. useEffect hook gets executed, when every time components gets rendered and no dependancy 
     2. useEffect hook gets executed when, component gets rendered due to state change in property which
     is added in dependancy array of useEffect hook
     3. if dependancy array is empty then, useEffect will not be called after any state change in any property
    components gets rendered when 1. 1st loading, 2. state change in variable state */
    useEffect(()=>{
        console.log("Component rendered......");
        console.log(sum);
    }, []);
    return (
        <>
            <button onClick={test}>CLICK</button>
            <p onMouseOver={test2}>
                HI
            </p>
            <button onClick={()=>add(45,789,3455,2444)}>ADD</button>
            <button onClick={()=>sub(6788,34, 56)}>SUBTRACT</button>
            <p>
                <b>Addition is is {sum}</b>
            </p>
            <p>
                <b>Subtraction is {subtraction}</b>
            </p>
        </>
    );
}