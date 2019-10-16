import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navigation">
                    <Link to="/">Status</Link>
                </div>
                <div className="navigation">
                    <Link to="/set-up">Set-up</Link>
                </div>
                <div className="navigation">
                    <Link to="/help-and-resources">Help and Resources</Link>
                </div>
                <div className="navigation">
                    <Link to="/blog">Blog</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;

