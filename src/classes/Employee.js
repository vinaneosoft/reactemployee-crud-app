
export class Employee{
    constructor(
        _id=0, 
        emp_name="", 
        dept_code="LD", 
        emp_salary=0, 
        experience=0, 
        emp_email="",
        joining_date=this.getDateTimeLocal(),
        secrete_code="123"
    ){
        this.empId=empId;
        this.empName=empName;
        this.deptCode=deptCode;
        this.basicSalary=basicSalary;
        this.experience=experience;
        this.emailId=emailId
        this.joiningDate=joiningDate;
        this.secrete_code=secrete_code;
    }
    getDateTimeLocal(){
        const d=new Date();
        return  (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }
}