import { EmployeeCard } from "./EmployeeCard";
import { Employee } from "../classes/Employee";
import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployeeById, getEmployeeById } from "../model/EmployeeCRUD";
import { useRef } from "react";

import  Input  from "@mui/material/Input";
import  InputAdornment  from "@mui/material/InputAdornment";
import  Search  from "@mui/icons-material/Search";

export function Employees(){
    const searchNode=useRef();
    let [neoemployees, setarray]=useState([])
    let [notFoundError, setError]=useState("");
    async function getEmps(){
           const data=await getAllEmployees(); 
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
        console.log(_id);
        
        if(_id!="" || _id!=undefined){
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
                <label htmlFor="_id">Employee Id : </label>
                <Input endAdornment={
                    <InputAdornment position="end">
                        <Search></Search>
                    </InputAdornment>
                    }  
                    
                variant="filled" inputRef={searchNode} id="_id" type="search" 
                onKeyUp={()=>getEmp(searchNode.current.value)} placeholder="Search" />
                <small className="text-danger">{notFoundError}</small>
            </div>
            <section className="d-flex flex-wrap">
                {cards}
            </section>
            </>
    );
}