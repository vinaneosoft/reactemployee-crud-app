import { useEffect, useState } from "react";

// components get rerendered when state change happens
// useState is hook function used to manage state of properties (variable, object, array)




export function Learning(){
    let [sum, setSum]=useState(0); 
    let [subtraction, setSub]=useState(0);

    let test=function(){
        console.log("Function called");  
    }
    let test2=(ev)=>{
        console.log(ev);  
    }

    let add=(...args)=>{
        let result=args.reduce((sum, ele)=>sum+ele) // internal looping
        console.log(result);
        sum=result;
        setSum(result);
       // sum=result;
    }
    let sub=(...args)=>{
        let result=args.reduce((sum, ele)=>sum-ele)
        console.log(result);
        setSub(result);
       // sum=result;
    }
    /* 1. useEffect hook gets executed, when every time components gets rendered and no dependancy 
     2. useEffect hook gets executed when, component gets rendered due to state change in property which
     is added in dependancy array of useEffect hook
     3. if dependancy array is empty then, useEffect will not be called after any state change in any property
    components gets rendered when 1. 1st loading, 2. state change in variable state */

    useEffect(()=>{
        console.log("useEffect called after component rendered.......");
        
    });

    return (
        <>
            <button onClick={test}>CLICK</button>
            <button onMouseOver={test2}>CLICK</button>
            <button onClick={()=>add(45,789,3455,2444)}>ADD</button>
            <button onClick={()=>sub(6788,34, 56)}>SUBTRACT</button>
            <p>
                <b>Addition is : {sum}</b>  {/* state change in sum useState */}
            </p>
            <p>
                <b>Subtraction is : {subtraction}</b>
            </p>
        </>
    );
}