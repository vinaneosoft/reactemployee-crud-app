import { useEffect, useState } from "react";
import { Employee } from "../classes/Employee";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addEmployee, getEmployeeById, updateEmployee } from "../model/EmployeeCRUD";


export function EmployeeForm(){
    const emp= useLoaderData();
    let {empId}=useParams(); // object destructuring
    const navigate =useNavigate();
    let [employee, setEmployee]=useState(()=>setInitialData())
    function setInitialData(){
        console.log("in fun");
        if(emp!=null){
         emp.joining_date=emp.joining_date.slice(0, emp.joining_date.length-2)
         return emp;
        }
        else
            return new Employee();
    }
    let [gender, setGender]=useState({
        male:"male",
        female:"female"
    })

    function getData(ev){
        setEmployee({...employee, [ev.target.id]:ev.target.value})
    }
    function collectData(ev){
        ev.preventDefault();
       // console.log(employee);
        if(empId!=undefined)
            updateEmp();
        else 
            addEmp();
    }
    async function updateEmp(){
        const data=await updateEmployee(employee);
        console.log(data);    
        if(data.modifiedCount>0){
            window.alert(`Employee with id ${employee._id} updated successfully.....`);
            navigate("/employees")
        }
        else
            window.alert("something went wrong");
    }
    async function addEmp(){
       // console.log(employee);
        const data=await addEmployee(employee);
       // console.log(data);
        if(data!=null){
            window.alert(`Employee with id ${data._id} added successfully.....`);
            navigate("/employees")
        }
        else
            window.alert("something went wrong");
        //console.log(res);
    }

    function getGender(ev){
        if(ev.target.checked)
            console.log(ev.target.value)
    }
useEffect(()=>{
  console.log("EmployeeForm rendered....");
  
})
let departmentCodes=['JS','LD','PHP','HR','DN'];
let options = departmentCodes.map((dcode, i)=><option key={"o"+i}>{dcode}</option>)
return(
<article className="d-flex justify-content-center">
<div className="p-3 border border-3 w-50">
    <h3>EMPLOYEE FORM</h3>
<form onSubmit={collectData}>
    <div className="mb-3">
        <label htmlFor="empId" className="form-label">ID</label>
        <input type="number" className="form-control" id="_id"  value={employee._id} onChange={getData} readOnly={empId!=undefined} />
    </div>
    <div className="mb-3">
        <label htmlFor="empName" className="form-label">NAME</label>
        <input type="text" className="form-control" id="emp_name" value={employee.emp_name} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="emailId" className="form-label">EMAIL ID</label>
        <input type="email" className="form-control" id="emp_email"   value={employee.emp_email} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="basicSalary" className="form-label">BASIC SALARY</label>
        <input type="number" className="form-control" id="emp_salary"   value={employee.emp_salary} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="experience" className="form-label">EXPERIENCE</label>
        <input type="number" className="form-control" id="experience"  value={employee.experience} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="joiningDate" className="form-label">JOINING DATE</label>
        <input type="datetime-local" className="form-control" id="joining_date"  value={employee.joining_date} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="deptCode" className="form-label">SELECT DEPARTMENT</label>
        <select id="dept_code"  value={employee.dept_code} onChange={getData}>
            {options}
        </select>
    </div>
    <div className="mb-3">
        <label htmlFor="secrete_code" className="form-label">SECRETE CODE</label>
        <input type="password" className="form-control" id="secrete_code"  value={employee.secrete_code} onChange={getData} />
    </div>
    <div className="mb-3">
        <label>SELECT GENDER</label>
        <input  type="radio" id="male" name="gender" value={gender.male} onChange={getGender} /> <label htmlFor="male">:MALE</label>
        <input  type="radio" id="female" name="gender" value={gender.female} onChange={getGender} />   <label htmlFor="female">:FEMALE</label>
    </div>
<button type="submit" className="btn btn-primary m-2">SUBMIT</button>
<button type="reset" onClick={()=>setEmployee(new Employee())} className="btn btn-primary">RESET</button>
</form>
</div>
</article>
);

}

/** _id=0, 
        emp_name="", 
        dept_code="LD", 
        emp_salary=0, 
        experience=0, 
        emp_email="",
        joining_date=this.getDateTimeLocal(),
        secrete_code="123" */