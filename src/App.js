import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Status from './components/Status/Status';
import Setup from './components/Setup/Setup';
import Billing from './components/Billing/Billing&Deals';
import Deals from './components/Deals/Deals'
import HelpCenter from './components/HelpCenter/HelpCenter';
import Blog from './components/Blog/Blog';
import './App.css';
import Navbar from './components/NavBar/NavBar';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main-container">
                    <Navbar />
                    <Status />
                    <Setup />
                    <Billing />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
