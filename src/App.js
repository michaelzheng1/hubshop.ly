import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Status from './components/Status/Status';
import Setup from './components/Setup/Setup';
import Billing from './components/Billing/Billing';
import HelpAndResources from './components/HelpAndResources/HelpAndResources';
import Blog from './components/Blog/Blog';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main-container">
                    <Header />
                    <Status />
                    <Setup />
                    <Billing />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
