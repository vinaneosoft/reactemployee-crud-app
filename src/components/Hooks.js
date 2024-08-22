import { useEffect, useRef, useState } from "react"



export function Hooks(){

    let counter=0;

    let [stateCounter, setStateCounter]=useState(0);
    let refCounter=useRef(0);

    useEffect(()=>{
        console.log("State:"+stateCounter);
        console.log("Ref:",refCounter);
        console.log("Normal:"+counter);
        
    }, [stateCounter, refCounter])

    function getCounter(){
        refCounter.current=refCounter.current+1
        console.log(refCounter.current);
        
    }
    function normalCounter(){
        counter++;
        console.log(counter);
    }
    return(
        <>
            <div>
                <b>State Counter : {stateCounter}</b>
                <button onClick={()=>setStateCounter(stateCounter+1)}>INCREMENT STATE COUNTER</button>
            </div>
            <div>
               
                <b>Ref Counter : {refCounter.current}</b>
                <button onClick={getCounter}> INCREMENT REF COUNTER</button>
            </div>
            <div>
                <button onClick={normalCounter}>CLICK</button>
            </div>
        </>
    )
}