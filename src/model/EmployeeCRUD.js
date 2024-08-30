
import axios from "axios";

const url1="http://localhost:3000/employees";
const url2="http://localhost:5000/employees"

export async function addEmployee(employee){
  // const res=await axios.post(url1,employee)
    const res=await axios.post(`${url2}/add`,employee) // employee : new records
    return res.data;
}
 
export async function updateEmployee(employee){
    //  const res=await axios.put(`${url1}/${employee._id}`,employee) // for json server
    const res=await axios.put(`${url2}/update/${employee._id}`,employee) // new records, id existing
   // console.log(res);
      return res.data;
  }

export async function getAllEmployees(){
    // axios.get(url1);
     const res=await axios.get(`${url2}/getall`) // back end req
    // console.log(res);
     return res.data;
 }

 export async function getEmployeeById(_id){
    //const res=await axios.get(`${url1}/${_id}`)
    const res=await axios.get(`${url2}/get/${_id}`) 
    return res.data;
 }

 export async function deleteEmployeeById(_id){
     //const res=await axios.delete(`${url1}/${_id}`)
     const res=await axios.delete(`${url2}/delete/${_id}`)
     return res.data;
 }

 export async function uploadEmployeePic(_id,employee_pic){
    let formData=new FormData();
    formData.append('_id', _id)
    formData.append('employee_pic', employee_pic)
    const res=axios.post(`${url2}/upload`,formData)
    return res.data;
 }


