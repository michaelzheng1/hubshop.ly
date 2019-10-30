import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "status" };
  }

  handleSelect(eventKey) {
    console.log("eventkey", eventKey);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg py-3 navbar-light backgro shadow-sm navbar-custom">
          <div className="container">
            <a href="#" className="navbar-brand">
              <img src="src/components/Images/logo.png" />
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              key="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="#" className="nav-link">
                    Status <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Set-up
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Help Center
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
