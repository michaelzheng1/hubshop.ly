import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Status from './components/Status/Status';
import Setup from './components/Setup/Setup';
import HelpAndResources from './components/HelpAndResources/HelpAndResources';
import Blog from './components/Blog/Blog';
import './App.css';

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
            <div className="main-container">
                <Header />
                <NavBar/>
                <Route exact path ="/" component = {Status}/>
                <Route exact path ="/set-up" component = {Setup}/>
                <Route exact path ="/help-and-resources" component = {HelpAndResources}/>
                <Route exact path ="/blog" component = {Blog}/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;