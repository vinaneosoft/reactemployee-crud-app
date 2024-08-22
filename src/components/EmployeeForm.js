

export function EmployeeForm(){
/**  empId=0, 
        empName="", 
        deptCode="", 
        basicSalary=0, 
        experience=0, 
        emailId="",
        joiningDate */

let departmentCodes=['JS','LD','PHP','HR','DN'];
let options = departmentCodes.map((dcode, i)=><option key={"o"+i}>{dcode}</option>)
return(
<article className="d-flex justify-content-center">
<div className="p-3 border border-3 w-50">
    <h3>EMPLOYEE INPUT FORM</h3>
<form>
    <div className="mb-3">
        <label htmlFor="empId" className="form-label">ID</label>
        <input type="number" className="form-control" id="empId" />
    </div>
    <div className="mb-3">
        <label htmlFor="empName" className="form-label">NAME</label>
        <input type="text" className="form-control" id="empName" />
    </div>
    <div className="mb-3">
        <label htmlFor="emailId" className="form-label">EMAIL ID</label>
        <input type="email" className="form-control" id="emailId" />
    </div>
    <div className="mb-3">
        <label htmlFor="basicSalary" className="form-label">BASIC SALARY</label>
        <input type="number" className="form-control" id="basicSalary" />
    </div>
    <div className="mb-3">
        <label htmlFor="experience" className="form-label">EXPERIENCE</label>
        <input type="number" className="form-control" id="experience" />
    </div>
    <div className="mb-3">
        <label htmlFor="joiningDate" className="form-label">JOINING DATE</label>
        <input type="datetime-local" className="form-control" id="joiningDate" />
    </div>
    <div className="mb-3">
        <label htmlFor="deptCode" className="form-label">SELECT DEPARTMENT</label>
        <select id="deptCode">
            {options}
        </select>
    </div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</article>
);

}