import React, { useEffect, useState } from 'react'
// import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './SignUp.css'

function SignIn() {

    const navigate = useNavigate()

    
    const [email, setEmail] = useState("");
   
    const [password, setPassword] = useState("");


    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const postData = () => {
        //checking Email
        if (!emailRegex.test(email)) {
            notifyA("Invalid Email");
            return;
        }

        //sending data to server
        fetch("http://localhost:5000/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    notifyA(data.error);
                } else {
                    notifyB("Signed In successfullly");
                    console.log(data);
                    localStorage.setItem("jwt", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    // setUserLogin(true);
                    navigate("/");
                }

                console.log(data);
            });
    };
    const gotootheruser = () => {
        navigate('/userview')
      }

  return (
    <div className='signUp'>
      <div class="form-container">
            <h1>Log In</h1>
            <div>
                <div class="input-group">
                    <input type="email" name="email" id="email" placeholder="Email" 
                    value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </div>
                
                
                <div class="input-group">
                    <input type="password" name="pass" id="pass" placeholder="Password" 
                    value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>

                <input type="submit" id="submit-btn" value="SignIn" onClick={()  => {postData()}}/>
            </div>
            {/* <a href="/signin" class="signin-link">Signin</a> */}
            <Link style={{textDecoration : "none"}} class="signin-link" to={'/signup'}>
                <span>Signup</span>
            </Link>

        </div>
        <div  onClick={() => {gotootheruser()}} className="form-container2">
            <span className='form-container2-text'>View our users BLOGS!!!</span>
        </div>
    </div>
  )
}

export default SignIn