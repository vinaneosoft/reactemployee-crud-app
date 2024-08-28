

export class Employee{
    constructor(
        empId=0, 
        empName="", 
        deptCode="LD", 
        basicSalary=0, 
        experience=0, 
        emailId="",
        joiningDate=this.getDateTimeLocal()
    ){
        this.empId=empId;
        this.empName=empName;
        this.deptCode=deptCode;
        this.basicSalary=basicSalary;
        this.experience=experience;
        this.emailId=emailId
        this.joiningDate=joiningDate;

    }
    getDateTimeLocal(){
        const d=new Date();
        return  (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }
}