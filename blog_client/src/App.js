import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/projects/CreateProject";

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/create" component={CreateProject} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
