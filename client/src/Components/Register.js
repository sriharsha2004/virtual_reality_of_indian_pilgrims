import React, {useState, useRef } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
// import validator from 'validator' 
import emailjs from '@emailjs/browser';

function Register(){
    const form = useRef();
    const navigate = useNavigate();
    const[name, setname] = useState('');
    const[username, setusername] = useState('');
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');

    function register(event){
        event.preventDefault();
        // alert("This is register method");
        // let f1=0,f2=0,f3=0;
        var pattern = /^([a-zA-Z0-9])+@gmail.com/;
        if(name.length === 0 || username.length === 0){
            alert("username or name can't be empty")
        }
        else if( pattern.test(email) === false ){
            alert('email must be in the format of ***@gmail.com')
            // f1=1;
        }
        else if(password.length<=8 || password.length>=20){
            alert('Password must be of length 8 to 20')
            // f2=1;
        }
        else
        // console.log(setpassword)
        {
            var user = {
                name: name,
                username: username,
                email: email,
                password: password
            }
    
            axios.post('/api/user/registeruser', user).then(res=>{
                console.log(res);
                // alert("Your Registration is successfull")
                // navigate("/otp");
                // alert(res.data);
                // navigate("/Explore");
                emailjs.sendForm('service_4tq76b4', 'template_jeokhtn', form.current, 'gDtSyBGsB7-3yq07M')
                .then((result) => {
                    console.log(result.text);
                    // navigate("/otp");
                    // navigate("/Login");
                    alert("Verify your mail-id");
                }, (error) => {
                    console.log(error.text);
                });
                // navigate("/otp");

                }).catch(err=>{
                    console.log(err);
                })
        }
    
}
    return(
        <div>
            <form onSubmit={register} ref={form} class='container-fluid'>
                <h1>REGISTER</h1>
                <button onClick={()=>navigate("/")}>Home</button>
                <input type="text" placeholder="name" className="form-control" name="Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <input type="email" placeholder="email address" className="form-control" name="user_email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input type="text" placeholder="username" className="form-control" name="Username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                {/* <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/> */}
                {/* <label for="inputPassword5" class="form-label">Password</label> */}
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder='password'
                value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <div id="emailHelp" class="form-text">We'll never share your password with anyone else.</div>
                <div className="mb-1 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <input type="submit" value="register" className="btn btn-primary"></input>
            </form>
        </div>
    )
}
export default Register;