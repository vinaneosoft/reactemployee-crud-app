import { EmployeeCard } from "./EmployeeCard";
import { Employee } from "../classes/Employee";
import { useEffect } from "react";

export function Employees(){

    let neoemployees=[
        new Employee(123,"Hari Kumar", "LD", 90000, 20, new Date("12 Jan 2002")),
        new Employee(121,"Pari Kumari", "JS", 95000, 25, new Date("12 Dec 2000"))
    ]

    useEffect(()=>{
        console.log("in useEffect");
        
    });
    let cards=neoemployees.map(employee=><EmployeeCard key={employee.empId} employee={employee}></EmployeeCard>)
    return(
            <section className="d-flex flex-wrap">
                {cards}
            </section>
    );
}