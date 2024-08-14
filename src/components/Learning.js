import { useEffect } from "react";



export function Learning(){
    let test=()=>{
        console.log("Function called");  
    }
    let test2=(event)=>{
        console.log(event);  
    }
    let add=(...args)=>{
        const sum=args.reduce((acc, ele)=>acc+ele)
        console.log(sum);
    }
    useEffect(()=>{
        console.log("Component rendered......");
    });
    return (
        <>
            <button onClick={test}>CLICK</button>
            <p onMouseOver={test2}>
                HI
            </p>
            <button onClick={()=>add(45,789,3455,2444)}>CLICK</button>
        </>
    );
}