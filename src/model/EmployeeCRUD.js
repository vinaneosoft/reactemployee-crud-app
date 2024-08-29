
import axios from "axios";

const url1="http://localhost:3000/employees";
const url2="http://localhost:5000/employees"

export async function addEmployee(employee){
   // axios.post(url1,employee);
    const res=await axios.post(`${url2}/add`,employee) // back end req
    return res.data;
}
export async function getAllEmployees(){
    // axios.post(url1,employee);
     const res=await axios.get(`${url2}/getall`) // back end req
    // console.log(res);
     return res.data;
 }

 export async function deleteEmployeeById(_id){
    // axios.post(url1,employee);
     const res=await axios.delete(`${url2}/delete/${_id}`) // link
     return res.data;
 }

 export async function getEmployeeById(_id){
    // axios.post(url1,employee);
     const res=await axios.get(`${url2}/get/${_id}`) // link
     return res.data;
 }