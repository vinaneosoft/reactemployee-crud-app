import { EmployeeCard } from "./EmployeeCard";
import { Employee } from "../classes/Employee";
import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployeeById, getEmployeeById } from "../model/EmployeeCRUD";
import { SearchBar } from "./SearchBar";
import { type } from "@testing-library/user-event/dist/type";

export function Employees(){
    let [neoemployees, setarray]=useState([])
    let [notFoundError, setError]=useState("");
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
        if(_id!=""){
            const employee=await getEmployeeById(_id) 
            if(employee!="")
            {
                setError("");
                setarray([employee]);
            }
            else 
                setError("Not Found....")
                
                  
        }
        else
            getEmps()
    }
    useEffect(()=>{
       // after rending if u want to connect to external system
       getEmps();
    }, []);
    let cards=neoemployees.map(employee=><EmployeeCard key={employee._id} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
            <>
            <SearchBar getEmp={getEmp}></SearchBar>
            <small className="text-danger">{notFoundError}</small>
            <section className="d-flex flex-wrap">
                {cards}
            </section>
            </>
    );
}