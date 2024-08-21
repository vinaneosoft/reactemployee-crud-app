

export class Employee{

    constructor(
        empId=0, 
        empName="", 
        deptCode="", 
        basicSalary=0, 
        experience=0, 
        joiningDate=new Date()
    ){
        this.empId=empId;
        this.empName=empName;
        this.deptCode=deptCode;
        this.basicSalary=basicSalary;
        this.experience=experience;
        this.joiningDate=joiningDate;

    }
}