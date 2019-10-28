import React from 'react';
import './Header.css';
import Navbar from '../NavBar/NavBar';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                <img src="src/components/Images/logo.png" />
                </div>
                <Navbar />
            </div>
        );
    }
}

export default Header;