import { Link } from 'react-router-dom';
import empImage from '../resources/sampleemployee.jpg';


/*1.  in src directly add absolute path of image
 2. in src use jsx expression and call require function by passing relative path of image
 src={require("../resources/sampleemployee.jpg")}
 
 3. import image and use image variable in src
 import empImage from '../resources/sampleemployee.jpg';
 */
export function EmployeeCard({employee, deleteEmployee, editProfilePic}){
    return(
        <div className="card" style={{width: '18rem'}}>
            <img height="150" src={empImage} className="card-img-top" alt="..." />
            <Link to={`/fileupload/${employee._id}`}>edit picture</Link>
            <div className="card-body">
                <h6>#{employee._id}</h6>
                <h5 className="card-title">{employee.emp_name}</h5>
                <p className="card-text"> {employee.emp_name} joined on {employee.joining_date.toString()}</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Department : {employee.dept_code}</li>
                <li className="list-group-item">Basic Salary : {employee.emp_salary}</li>
                <li className="list-group-item">Experience : {employee.experience} years</li>
                </ul>
                <div className="card-body">
                <Link to={`/editemployee/${employee._id}`} className="card-link">EDIT</Link>
                <button onClick={()=>deleteEmployee(employee._id)} className="card-link btn btn-link">DELETE</button>
            </div>
        </div>
    );
}
