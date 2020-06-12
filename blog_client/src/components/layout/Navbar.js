import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const Navbar = () => {
    return (
        <nav className="nav-wrapper blue">
            <div className="container">
                <Link to="/" className="brand-logo">
                    NmOi
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
};

export default Navbar;
