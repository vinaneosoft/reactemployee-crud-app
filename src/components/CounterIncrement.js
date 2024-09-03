import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice";

export function CounterIncrement(){

   const count= useSelector((storestate)=>storestate.counter.value);
    const dispatch =useDispatch();
    return (
        <div className="m-2">
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        </div>
    );
}