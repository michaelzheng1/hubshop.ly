import React from 'react';
import Status from './components/Status/Status';
import Setup from './components/Setup/Setup';
import Billing from './components/Billing/Billing&Deals';
import HelpCenter from './components/HelpCenter/HelpCenter';
import Blog from './components/Blog/Blog';
import Navbar from './components/NavBar/NavBar';
import IssueAndHelp from './components/IssueAndHelp/IssueAndHelp';
import Section from './components/section';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Navbar />
                <Section component={ <Status /> } id="status"/>
                <Section component={ <Setup /> } id="setup"/>
                <Section component={ <Billing /> } id="billing"/>
                <Section component={ <HelpCenter /> } id="helpCenter"/>
                <Section component={ <IssueAndHelp /> } id="issueAndHelp"/>
                <Section component={ <Blog /> } id="blog"/>
            </div>
        );
    }
}

export default App;
