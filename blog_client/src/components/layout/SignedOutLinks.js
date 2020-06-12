import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class SignedOutLinks extends Component {
    render() {
        return (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/login">Sign In</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        )
    }
}

export default SignedOutLinks
