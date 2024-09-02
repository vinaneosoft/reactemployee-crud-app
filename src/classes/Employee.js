
export class Employee{
    constructor(
        _id=0, // json id=""  
        emp_name="", 
        dept_code="LD", 
        emp_salary=0, 
        experience=0, 
        emp_email="",
        joining_date=this.getDateTimeLocal(),
        secrete_code="123",
        employee_pic
    ){
        this._id=_id;
        this.emp_name=emp_name;
        this.dept_code=dept_code;
        this.emp_salary=emp_salary;
        this.experience=experience;
        this.emp_email=emp_email
        this.joining_date=joining_date;
        this.secrete_code=secrete_code;
        this.employee_pic=employee_pic;
    }
    getDateTimeLocal(){
        let d=new Date();
        return  (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }
}