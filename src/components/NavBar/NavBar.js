import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";

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
                <Link
                  activeClass="active"
                  to="status"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Status<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="setup"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Set-Up
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
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Blog
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
