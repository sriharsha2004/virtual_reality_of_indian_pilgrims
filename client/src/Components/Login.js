import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import './Login.css'
function Login(){
    const navigate = useNavigate();
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');

    function login(event){
        event.preventDefault();
        // alert("This is register method");

        var user = {
            username: username,
            password: password
        }

        axios.post('/api/user/loginuser', user)
        .then(res=>{
            console.log(res);
            // alert(res.data);
            if(res.data === "Login Successfull"){
                // navigate("/Explore");
                navigate("/otp");
            }
            else{
                alert("Register first to login");
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
        <div className="log" class='container-fluid'>
            <form onSubmit={login}>
                <h1>LOGIN</h1>
                <button onClick={()=>navigate("/")}>Home</button>
                <input type="text" placeholder="username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <div className="mb-1 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <input type="submit" value="login" className="btn btn-primary"></input>
            </form>
        </div>
    )
}
export default Login;