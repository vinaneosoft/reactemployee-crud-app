

export class Employee{

    constructor(
        empId=0, 
        empName="", 
        deptCode="", 
        basicSalary=0, 
        experience=0, 
        emailId="",
        joiningDate=new Date()
    ){
        this.empId=empId;
        this.empName=empName;
        this.deptCode=deptCode;
        this.basicSalary=basicSalary;
        this.experience=experience;
        this.emailId=emailId
        this.joiningDate=joiningDate;

    }
}