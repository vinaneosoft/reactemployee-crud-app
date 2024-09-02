import { EmployeeCard } from "./EmployeeCard";
import { Employee } from "../classes/Employee";
import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployeeById, getEmployeeById } from "../model/EmployeeCRUD";
import { useRef } from "react";


export function Employees(){
    const searchNode=useRef();
    let [neoemployees, setarray]=useState([])
    let [notFoundError, setError]=useState("");
    async function getEmps(){
           const data=await getAllEmployees(); 
         //  console.log(data);
         //  const base64Image=Employee.getImage(data.employee_pic);
         //  data.employee_pic=base64Image;
          // console.log(data);  
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
            if(employee!=""){
                setError("");
                setarray([employee]);
            }
            else 
                setError("Not Found....")
        }
        else{
            setError("");
            getEmps()
        }
    }
    useEffect(()=>{
       // after rending if u want to connect to external system
         getEmps();
    }, []);
    let cards=neoemployees.map(employee=><EmployeeCard key={employee._id} employee={employee} deleteEmployee={deleteEmployee}></EmployeeCard>)
    return(
            <>
            <div>
                <label htmlFor="_id">Enter Id to Search Employee : </label>
                <input ref={searchNode} id="_id" type="search" onKeyUp={()=>getEmp(searchNode.current.value)} placeholder="Search" aria-label="Search" />
                <small className="text-danger">{notFoundError}</small>
            </div>
            <section className="d-flex flex-wrap">
                {cards}
            </section>
            </>
    );
}