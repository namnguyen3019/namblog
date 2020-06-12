import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { signup } from '../../actions/userActions';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <h2>Log In</h2>
                <form onSubmit="handleSubmit">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="validate"
                            onChange={(e) => this.setState({email: e.target.email})}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            className="validate"
                            id="password"
                            type="password"
                            onChange={(e) => this.setState({ password: e.target.password})}
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">
                            {" "}
                            Login{" "}
                        </button>
                        <br />
                        <span>
                            Dont have account? Signup <a href="signup">here</a>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
