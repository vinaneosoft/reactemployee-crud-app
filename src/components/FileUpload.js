import { useParams } from "react-router-dom";

export function FileUpload(){
    const {_id}=useParams();
    console.log(_id);
    return (
        <section className="m-3 p-3 border border-3">
            <p>
                <b>Employee Id : </b><i>{_id}</i>
            </p>
            <label htmlFor="employee_pic">Upload Image:</label>
            <input type="file" id="employee_pic"></input>
        </section>
    );
}