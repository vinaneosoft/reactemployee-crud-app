import empImage from '../resources/sampleemployee.jpg';


/*1.  in src directly add absolute path of image
 2. in src use jsx expression and call require function by passing relative path of image
 src={require("../resources/sampleemployee.jpg")}
 
 3. import image and use image variable in src
 import empImage from '../resources/sampleemployee.jpg';
 */
export function EmployeeCard({employee}){

    return(
        <div className="card" style={{width: '18rem'}}>
            <img height="150" src={empImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6>#{employee.empId}</h6>
                <h5 className="card-title">{employee.empName}</h5>
                <p className="card-text"> {employee.empName} joined on {employee.joiningDate.toString()}</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Department : {employee.deptCode}</li>
                <li className="list-group-item">Basic Salary : {employee.basicSalary}</li>
                <li className="list-group-item">Experience : {employee.experience} years</li>
                </ul>
                <div className="card-body">
                <a href="#" className="card-link">EDIT</a>
                <a href="#" className="card-link">DELETE</a>
            </div>
        </div>
    );
}