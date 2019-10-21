import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src="src/components/Images/logo.png" />
                <h1>Hubshop.ly</h1>
                <p>by Groove Commerce</p>
            </div>
        );
    }
}

export default Header;