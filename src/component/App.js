import React, { Component } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Add from "./Add.js";
import Remove from "./Remove.js";
import Home from "./Home.js";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename="/">
      <div>
        <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Home">
              <Home />
          </Route>
          <Route path="/">
            <div>Page Not Found</div>
          </Route>
        </Switch>
      </div>
    </Router>   
    );
  }
}
export default App;
