import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdminLogin(){
    let [message, setMessage]=useState("");
    const unameNode=useRef();
    const passNode=useRef();

    const navigate= useNavigate();

    function collectData(event){
        event.preventDefault();
        login(unameNode.current.value, passNode.current.value);
    }
    function login(username, password){
        setMessage("");
        if(username=="admin" && password == 'neo123')
            navigate('/home')
        else
            setMessage("Incorrect Username or Password")

    }
    return (
        <>  
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
        </>
    );
}