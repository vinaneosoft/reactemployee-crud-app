import { useParams } from "react-router-dom";
import { uploadEmployeePic } from "../model/EmployeeCRUD";

export function FileUpload(){
    const {_id}=useParams();
    async function fileUp(event){
       const data=await uploadEmployeePic(_id, event.target.files[0]);
       if(data.modifiedCount>0)
        window.alert("Profile pic updated successfully...");
       else
        window.alert("Someting went wrong");
    }
    return (
        <section className="m-3 p-3 border border-3">
            <p>
                <b>Employee Id : </b><b>{_id}</b>
            </p>
            <label htmlFor="employee_pic">Upload Image:</label>
            <input type="file" id="employee_pic" onChange={fileUp}></input>
        </section>
    );
}