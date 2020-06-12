import React, { Component, Fragment } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m9">
                            <ProjectList />
                        </div>
                        <div className="col s12 m2 offset-by-1">
                            <Notifications />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;
