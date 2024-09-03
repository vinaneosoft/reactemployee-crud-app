import { Link } from 'react-router-dom';
import empImage from '../resources/samplepic.jpg';
import  Delete  from '@mui/icons-material/Delete';
import  Edit  from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
/*1.  in src directly add absolute path of image
 2. in src use jsx expression and call require function by passing relative path of image
 src={require("../resources/sampleemployee.jpg")}
 
 3. import image and use image variable in src
 import empImage from '../resources/sampleemployee.jpg';
 */

export function EmployeeCard({employee, deleteEmployee, editProfilePic}){
    return(
        <div className="card bg-warning m-2" style={{width: '18rem'}}>
            <div>
                <img height="150" src={(employee.employee_pic!=undefined)?(`data:image/png;base64,${employee.employee_pic}`):(empImage)}  className="card-img-top" alt={employee.emp_name} />
            </div>
            <Link to={`/fileupload/${employee._id}`} className='btn btn-success'><span>EDIT PICTURE</span><Edit /></Link>
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
            <div className="card-body d-flex justify-content-between">
                <Link title='edit employee'  to={`/editemployee/${employee._id}`} className="card-link"><Edit color="success" /></Link>
                <button title='delete employee' onClick={()=>deleteEmployee(employee._id)} className="card-link btn btn-link"><Delete color='error'/></button>
            </div>
        </div>
    );
}
