import React, { Component } from "react";
import { connect } from "react-redux";

import { createProject } from "../../actions/projectActions";

class CreateProject extends Component {
    state = {
        title: "",
        body: "",
    };
    onChange = () => {};
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createProject(this.state);
    };
    render() {
        return (
            <div>
                <h2> Create A New Project </h2>
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field">
                                <label htmlFor="title">Project title</label>
                                <input
                                    id="title"
                                    type="text"
                                    value={this.state.title}
                                    onChange={(e) => this.setState({title: e.target.value})}
                                />
                            </div>
                            <div className="input-field">
                                <textarea
                                    value={this.state.body}
                                    id="textarea1"
                                    className="materialize-textarea"
                                    onChange={(e) =>
                                        this.setState({ body: e.target.value })
                                    }
                                ></textarea>
                                <label htmlFor="textarea1">
                                    Project detail
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="btn"> Submit </button>
                            <button className="btn"> Cancel </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { createProject })(CreateProject);
