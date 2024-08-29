import { EmployeeCard } from "./EmployeeCard";
import { Employee } from "../classes/Employee";
import { useEffect, useState } from "react";
import { getAllEmployees } from "../model/EmployeeCRUD";

export function Employees(){

    let [neoemployees, setarray]=useState([])

    async function getEmps(){
           const data=await getAllEmployees(); 
           console.log(data);
           setarray(data);
    }
    useEffect(()=>{
       // after rending if u want to connect to external system
       getEmps();
    }, []);
    let cards=neoemployees.map(employee=><EmployeeCard key={employee._id} employee={employee} getEmps={getEmps}></EmployeeCard>)
    return(
            <section className="d-flex flex-wrap">
                {cards}
            </section>
    );
}