import { useParams } from "react-router-dom";
import { uploadEmployeePic } from "../model/EmployeeCRUD";
import { useRef } from "react";

export function FileUpload(){
    const {_id}=useParams();
    let file=useRef();
    async function fileUp(event){
        if(file.current!=undefined){
            const data=await uploadEmployeePic(_id, file.current);
            if(data.modifiedCount>0)
                window.alert("Profile pic updated successfully...");
            else
                window.alert("Someting went wrong");
        } 
        else
            window.alert("Please Upload Image")      
    }
    return (
        <section className="m-3 p-3 border border-3">
            <p>
                <b>Employee Id : </b><b>{_id}</b>
            </p>
            <label htmlFor="employee_pic">Upload Image:</label>
            <input type="file" id="employee_pic" onChange={(event)=>file.current=event.target.files[0]}></input>
            <button onClick={fileUp}>UPLOAD</button>
        </section>
    );
}