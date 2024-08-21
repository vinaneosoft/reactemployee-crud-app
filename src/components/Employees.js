import { EmployeeCard } from "./EmployeeCard";


export function Employees(){

    let neoemployees=[
        {
            empId:123,
            empName:"Hari Kumar",
            deptCode:"LD",
            basicSalary:90000,
            experience : 20,
            joiningDate : new Date("12 Dec 2000")
        },
        {
            empId:121,
            empName:"Pari Kumari",
            deptCode:"JS",
            basicSalary:95000,
            experience : 25,
            joiningDate : new Date("12 Jan 2002")
        }
    ]
    let cards=neoemployees.map(employee=><EmployeeCard employee={employee}></EmployeeCard>)
    return(
            <section className="d-flex flex-wrap">
                {cards}
            </section>
    );
}