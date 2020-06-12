import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class SignedInLinks extends Component {
    render() {
        return (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/create">New Project</Link>
                </li>
                <li>
                    <Link to="/signup">Log Out</Link>
                </li>
                <li>
                    <Link to="/" className='btn btn-floating'>NN</Link>
                </li>
            </ul>
        );
    }
}

export default SignedInLinks;
