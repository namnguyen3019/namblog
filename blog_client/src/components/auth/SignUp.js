import React, { Component } from "react";
import { connect } from 'react-redux';
import { signup } from '../../actions/userActions';

class SignUp extends Component {

    state = {
        email: '', password: '' 
    }

    handleOnChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        const user = this.state;
        console.log(this.state)
        this.props.signup(user)
    }
    render() {
        return (
            <div>
                <h3> Sign up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="firstName"> First Name</label>
                        <input id="firstName" type="text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName"> Last Name</label>
                        <input id="lastName" type="text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>
                        <input id="email" type="email" onChange={this.handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"> Password</label>
                        <input id="password" type="password" onChange={this.handleOnChange}/>
                    </div>
                    <div>
                        <button className="btn"> Submit </button>
                        <button className="btn"> Cancel </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { signup })(SignUp);
