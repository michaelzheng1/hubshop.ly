import React from 'react';
import Header from './components/Header/Header';
import Status from './components/Status/Status';
import Deals from './components/Deals/Deals';
import HelpAndResources from './components/HelpAndResources/HelpAndResources';
import Blog from './components/Blog/Blog';
import './App.css';

class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Header />
                <Status />
                <Deals />
                <HelpAndResources />
                <Blog />
            </div>
        );
    }
}

export default App;