import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../features/counter/counterSlice";

export function CounterDecrement(){

    const count= useSelector((storestate)=>storestate.counter.value);
    const dispatch =useDispatch();
     return (
         <div className="m-2">
             <p>{count}</p>
             <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
         </div>
     );
 }