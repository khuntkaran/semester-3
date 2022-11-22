import {  Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();

    const [user,setUser]=useState({email:"",password:""});

    const handleInput=(e)=>{setUser({...user,[e.target.name]:e.target.value});}

    const Login = async (e)=>{
        e.preventDefault();

        const {email,password}=user;
        const res=await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })

        const data=await res.json();
        
        if(res.status===200){
            navigate('./login');
        }
        else if(data.e==="unmatch"){
            window.alert("password is wrong" );
        }
        else if(data.e==="error"){
            window.alert("please Register and after login");
        }
        else{
            window.alert("login failed due to some error");
        }
    }

    return (
        <>
            <div class="container-fluid bg-info text-center vh-100 ">
                <div class="container pt-5">
                    <div class="row justify-content-center ">
                        <div class="card  " style={{ width: "21rem" }}>
                            <div class="card-body ">
                                <form onSubmit={Login} method="POST" className="mb-3">
                                        <div class="card-title h3 text-info">USER LOGIN</div>
                                        <div class="card-subtitle mb-2 text-muted">Please enter your Email_Id and password!</div>
                                        <div class="card-subtitle text-start mt-4 mb-2 h5 text-info">Email_Id</div>
                                        <input required name="email" type="text" class="form-control" placeholder="Email_Id"  value={user.email} onChange={handleInput}   />
                                        <div class="card-subtitle text-start mt-4 mb-2 h5 text-info">Password</div>
                                        <input required name="password" type="password" class="form-control mb-4" placeholder="Password" value={user.password} onChange={handleInput}   />
                                        {/* <div><a href="#" class="card-subtitle my-4 text-muted">Forgot Password?</a></div> */}
                                        <button  style={{ textDecoration: "none", color: "black", fontSize: 20, fontFamily: "cursive" }} className="me-3 mt-3 btn btn-info" type="submit" >Login</button>
                                </form>
                                <Link to="./register" >Go to Registertion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;