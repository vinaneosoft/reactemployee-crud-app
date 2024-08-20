import { useEffect, useRef, useState } from "react";

// components get rerendered when state change happens
// useState is hook function used to manage state of properties (variable, object, array)

export function Learning(){
    let [sum, setSum]=useState(0); // returns array of length 2, current state of variable, function ref for state change
    let [subtraction, setSub]=useState(0);
    let [age, setAge]=useState(0);
    let ageNode=useRef();

    let getAge=()=>{
        //console.log(ageNode);
       // console.log(ageNode.current.value);
        //setAge(ageNode.current.value);
    }


    let prevStyle={
        backgroundColor : "yellow",
        padding : '10px'
        // borderRadius ?????
    }
    let [buttonStyle, changeStyle]=useState(prevStyle)
   
    let test=function(){
        console.log("Function called");  
        let newStyle={ ...buttonStyle,backgroundColor :"pink", borderRadius:"15px" }
        console.log(newStyle);
        changeStyle(newStyle);

    }
    let test2=(ev)=>{
        console.log(ev);  
    }

    let add=(...args)=>{
        let result=args.reduce((sum, ele)=>sum+ele) // internal looping
        setSum(result);
        //console.log(result);
       // sum=result; // wrong
    }
    let sub=(...args)=>{
        let result=args.reduce((sum, ele)=>sum-ele)
        setSub(result);
       // console.log(result);
       // subtraction=result; // wrong
    }
    /* 1. useEffect hook gets executed, when every time components gets rendered and no dependancy 
     2. useEffect hook gets executed when, component gets rendered due to state change in property which
     is added in dependancy array of useEffect hook
     3. if dependancy array is empty then, useEffect will not be called after any state change in any property.
    components gets rendered when only on 1st loading */

    useEffect(()=>{
        console.log(`Set up..... ${sum}, ${subtraction}`);
        return () => {
            console.log(`Clean up.... ${sum}, ${subtraction}`);
          };
    },[]);

    return (
        <>
            <button style={buttonStyle} onClick={test}>CLICK</button>
            <button   onMouseOver={test2}>CLICK</button>
            <button onClick={()=>add(45,789,3455,2444)}>ADD</button>
            <button onClick={()=>sub(6788,34, 56)}>SUBTRACT</button>
            <p>
                <b>Addition is : {sum}</b>  {/* state change in sum useState */}
            </p>
            <p>
                <b>Subtraction is : {subtraction}</b>
            </p>
            <div>
                <h3>IF ELSE</h3>
                <input type="number" defaultValue="0" ref={ageNode}
                 onKeyUp={()=> setAge(ageNode.current.value)}></input>
                {age>=18 ?    <p>
                    <b>Welcome!!!! for voting</b>
                </p> :  <p>
                    <b>Sorry!!!! you are not allowed for voting</b>
                </p>}
            </div>
        </>
    );
}