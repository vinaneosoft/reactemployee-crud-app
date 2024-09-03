import { useDispatch, useSelector } from "react-redux";
import { incrementByPayload } from "../features/counter/counterSlice";

export function CounterPayloadIncrement(){

   const count= useSelector((storestate)=>storestate.counter.value);
    const dispatch =useDispatch();
    let amount=5;
    return (
        <div className="m-2">
            <p>{count}</p>
            <button onClick={()=>dispatch(incrementByPayload(amount))}>INCREMENT BY {amount}</button>
        </div>
    );
}