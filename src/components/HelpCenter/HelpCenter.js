import React from "react";
import "./helpCenter.css";
import General from "./Accordin/General";
import Benefits from "./Accordin/Benefits";
import Billing from "./Accordin/Billing";
import Search from "./SearchBar/SearchBar";
import { FaStar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { IoLogoWordpress } from "react-icons/io";
import { FaWordpress } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";

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
                  <ul className="help-navbar-nav">
                    <li className="nav-item">
                      <div className="icons">
                        <MdQuestionAnswer />
                      </div>                      
                      <a href="#" className="nav-link" onClick={this.handleClick}>
                        General
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="icons">
                        <FaStar />
                      </div>
                      <a href="#" className="nav-link" onClick={this.handleClick}>
                        Benefits
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="icons">
                        <FaDollarSign />
                      </div>
                      <a href="#" className="nav-link" onClick={this.handleClick} >
                        Billing
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="icons">
                        <FaWrench />
                      </div>
                      <a href="#" className="nav-link" onClick={this.handleClick}>
                        Technica
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="icons">
                        <FaWordpress />
                      </div>
                      <a href="#" className="nav-link" onClick={this.handleClick} >
                        BigPres.s
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <Search />
              <div>
                <General display={this.state.display} />
                <Benefits display={this.state.display} />
                <Billing display={this.state.display} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpAndResources;

/*
 <div>
         <nav className="nav" id="navbar">
        <div className="nav-content">
         
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="helpCenter"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Help Center
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      */