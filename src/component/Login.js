import React, { Component } from "react";
import './Login.css';
import pic from "./pic2.jpg"


class Login extends Component{
    render(){
        return(
            <div class="body1">
                <div>
                <div class="signUpForm">
                <form>
                    <img src={pic}></img><br></br><br></br>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email"></input><br></br><br></br>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Password"></input><br></br><br></br>
                    <button className="btn btn-primary">Login</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;