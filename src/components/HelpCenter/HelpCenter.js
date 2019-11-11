import React from "react";
import "./helpCenter.css";
import General from "./Accordin/General";
import Benefits from "./Accordin/Benefits";
import Search from "./SearchBar/SearchBar";

class HelpAndResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'General'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('this state now ...', e.target.innerText);
    var state = e.target.innerText;
    this.setState({ display: state })
  }

  render() {
    return (
      <div className="container">
        <div className="col-16">
          <h1>Help Center</h1>
          <div className="card">
            <h5 className="card-header">FAQ</h5>
            <div className="card-body">
              <div className="card-text">
                <nav className="navbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <img src="/src/components/Images/question.png" alt="questions"></img>
                      <a href="#" className="nav-link" onClick={this.handleClick}>
                        General
                      </a>
                    </li>
                    <li className="nav-item">
                   
                      <img src="/src/components/Images/star.png" alt="questions"></img>
                      <a href="#" className="nav-link" onClick={this.handleClick}>
                        Benefits
                      </a>
                    
                    </li>
                    <li className="nav-item">
                      <img src="/src/components/Images/money.png" alt="questions"></img>
                      <a href="#" className="nav-link" onClick={this.handleClick} >
                        Billing
                      </a>
                    </li>
                    <li className="nav-item">
                      <img src="/src/components/Images/group.png" alt="questions"></img>
                      <a href="#" className="nav-link" onClick={this.handleClick}>
                        Technica
                      </a>
                    </li>
                    <li className="nav-item">
                      <img src="/src/components/Images/bigpress.png" alt="questions"></img>
                      <a href="#" className="nav-link" onClick={this.handleClick} >
                        BigPress
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <Search />
              <div>
                <General display={this.state.display} />
                <Benefits display={this.state.display} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpAndResources;
