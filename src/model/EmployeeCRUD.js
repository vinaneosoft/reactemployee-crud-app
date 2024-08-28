
import axios from "axios";

const url1="http://localhost:3000/employees";
const url2="http://localhost:5000/employees"

export async function addEmployee(employee){
   // axios.post(url1,employee);
    const res=await axios.post(`${url2}/add`,employee) // back end req
    return res;
}