import { EmployeeCard } from "./EmployeeCard";
import { Employee } from "../classes/Employee";
import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployeeById, getEmployeeById } from "../model/EmployeeCRUD";
import { SearchBar } from "./SearchBar";

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
            const data=await deleteEmployeeById(_id);
            if(data.deletedCount>0){
                window.alert("Employee deleted Successfully")
                getEmps();
            }
            else
                window.alert("Something went wrong....")
        }
    }
    async function getEmp(_id){
       const employee= neoemployees.find(emp=>emp._id=_id)
      // console.log(employee);
       setarray([employee])
    }
    useEffect(()=>{
       // after rending if u want to connect to external system
       getEmps();
    }, []);
    let cards=neoemployees.map(employee=><EmployeeCard key={employee._id} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
            <>
            <SearchBar getEmp={getEmp}></SearchBar>
            <section className="d-flex flex-wrap">
                {cards}
            </section>
            </>
    );
}