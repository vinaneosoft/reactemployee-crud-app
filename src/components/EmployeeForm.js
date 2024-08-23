import { useEffect, useState } from "react";
import { Employee } from "../classes/Employee";
import { useParams } from "react-router-dom";


export function EmployeeForm(){

    let {empId}=useParams(); // object destructuring
 


    let [employee, setEmployee]=useState(new Employee())

    let [gender, setGender]=useState({
        male:"male",
        female:"female"
    })

    function getData(ev){
        setEmployee({...employee, [ev.target.id]:ev.target.value})
    }
    function collectData(ev){
        ev.preventDefault();
        console.log(employee);
        // react http : addEmployee(employee) / updateEmployee(employee)
    }
    function getGender(ev){
        if(ev.target.checked)
            console.log(ev.target.value)
    }
useEffect(()=>{
   console.log("in useEffect");
   console.log(empId);
   // find employee to display in update form
})
let departmentCodes=['JS','LD','PHP','HR','DN'];
let options = departmentCodes.map((dcode, i)=><option key={"o"+i}>{dcode}</option>)
return(
<article className="d-flex justify-content-center">
<div className="p-3 border border-3 w-50">
    <h3>EMPLOYEE INPUT FORM</h3>
<form onSubmit={collectData}>
    <div className="mb-3">
        <label htmlFor="empId" className="form-label">ID</label>
        <input type="number" className="form-control" id="empId" name="empId" value={employee.empId} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="empName" className="form-label">NAME</label>
        <input type="text" className="form-control" id="empName" value={employee.empName} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="emailId" className="form-label">EMAIL ID</label>
        <input type="email" className="form-control" id="emailId"   value={employee.emailId} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="basicSalary" className="form-label">BASIC SALARY</label>
        <input type="number" className="form-control" id="basicSalary"   value={employee.basicSalary} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="experience" className="form-label">EXPERIENCE</label>
        <input type="number" className="form-control" id="experience"  value={employee.experience} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="joiningDate" className="form-label">JOINING DATE</label>
        <input type="datetime-local" className="form-control" id="joiningDate"  value={employee.joiningDate} onChange={getData} />
    </div>
    <div className="mb-3">
        <label htmlFor="deptCode" className="form-label">SELECT DEPARTMENT</label>
        <select id="deptCode"  value={employee.deptCode} onChange={getData}>
            {options}
        </select>
    </div>
    <div className="mb-3">
        <label>SELECT GENDER</label>
        <input  type="radio" id="male" name="gender" value={gender.male} onChange={getGender} /> <label htmlFor="male">:MALE</label>
        <input  type="radio" id="female" name="gender" value={gender.female} onChange={getGender} />   <label htmlFor="female">:FEMALE</label>
    </div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</article>
);

}