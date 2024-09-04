import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { setUser } from "../features/admin/loginSlice";
import { useDispatch } from "react-redux";
export function AdminLogin(){
    let [message, setMessage]=useState("");
    let dispatch=useDispatch();
    const unameNode=useRef();
    const passNode=useRef();

    const navigate= useNavigate();

    function collectData(event){
        event.preventDefault();
        login(unameNode.current.value, passNode.current.value);
    }
    function login(username, password){
        setMessage("");
        if(username=="admin" && password == 'neo123'){
            const cookies = new Cookies();
            cookies.set('neoadmin', username, {
                expires:new Date('5-Sep-2024')
            });
            dispatch(setUser(username)); // as we are dispatching the action, reducer is making state change in store
            navigate('/home')
        }
        else
            setMessage("Incorrect Username or Password")

    }
    return (
        <>  
        <article className="d-flex justify-content-center">
        <div className="p-3 border border-3 w-50">
            <h3>LOGIN FORM</h3>
            <p className="text-danger">{message}</p>
            <form onSubmit={collectData}>
                <div className="mb-3">
                <label htmlFor="username" className="form-label">USERNAME</label>
                <input type="text" className="form-control" id="username" ref={unameNode} defaultValue="" />
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">PASSWORD</label>
                <input type="text" className="form-control" id="password" ref={passNode} defaultValue="" />
                </div>
                <div>
                <button type="submit" className="btn btn-primary m-2">LOGIN</button>
                <button type="reset" className="btn btn-primary">RESET</button>
                </div>
            </form>
            </div></article>
        </>
    );
}