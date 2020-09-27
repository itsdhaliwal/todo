import React, { Component } from "react";
import './SignUp.css';
import pic from "./pic.png"


class SignUp extends Component{
    render(){
        return(
            <div class="body1">
                <div class="signUpForm">
                <form>
                    <img src={pic}></img><br></br><br></br>
                    <p>First Name</p>
                    <input type="text" name="fName" placeholder="First Name"></input><br></br><br></br>
                    <p>Last Name</p>
                    <input type="text" name="lName" placeholder="Last Name"></input><br></br><br></br>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email"></input><br></br><br></br>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Password"></input><br></br><br></br>
                    <button className="btn btn-primary">Sign Up</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SignUp;