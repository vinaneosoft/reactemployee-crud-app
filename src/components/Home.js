import { CounterDecrement } from "./CounterDecrement";
import { CounterIncrement } from "./CounterIncrement";
import { CounterPayloadIncrement } from "./CounterPayloadIncrement";


export function Home(){
    return (
        <section>
        <p>
            Welcome to Neosoft. <br></br> 
            This is Employee Management portal
        </p>
        <CounterIncrement></CounterIncrement>
        <hr></hr>
        <CounterDecrement></CounterDecrement>
        <hr></hr>
        <CounterPayloadIncrement></CounterPayloadIncrement>
        </section>
    );
}