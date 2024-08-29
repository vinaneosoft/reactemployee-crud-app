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

    async function deleteEmployee(_id){
        const ans=window.confirm("Do you really want to delete??")
        if(ans) {
            const data=await deleteEmployeeId(_id);
            if(data.deletedCount>0){
                window.alert("Employee deleted Successfully")
                getEmps();
            }
            else
                window.alert("Something went wrong....")
        }
    }



    useEffect(()=>{
       // after rending if u want to connect to external system
       getEmps();
    }, []);
    let cards=neoemployees.map(employee=><EmployeeCard key={employee._id} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
            <section className="d-flex flex-wrap">
                {cards}
            </section>
    );
}