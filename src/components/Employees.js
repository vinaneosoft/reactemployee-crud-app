import { EmployeeCard } from "./EmployeeCard";
import { Employee } from "../classes/Employee";
import { useEffect, useState } from "react";
import { getAllEmployees } from "../model/EmployeeCRUD";

export function Employees(){

    let [neoemployees, setarray]=useState([
        new Employee(123,"Hari Kumar", "LD", 90000, 20, new Date("12 Jan 2002")),
        new Employee(121,"Pari Kumari", "JS", 95000, 25, new Date("12 Dec 2000"))
    ])

    async function getEmps(){
           const data=await getAllEmployees(); 
           console.log(data);
           setarray(data);
    }
    useEffect(()=>{
       // after rending if u want to connect to external system
       getEmps();
    }, []);
    let cards=neoemployees.map(employee=><EmployeeCard key={employee.empId} employee={employee}></EmployeeCard>)
    return(
            <section className="d-flex flex-wrap">
                {cards}
            </section>
    );
}