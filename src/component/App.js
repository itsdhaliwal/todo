import React, { Component } from "react";
import {HashRouter as Router , Switch , Route} from "react-router-dom";
import Navbar from "./navbar"
import SignUp from "./SignUp";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class App extends Component{
  render(){
    return(
      <Router basename="/">
        <div>
        <Navbar />
        <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
