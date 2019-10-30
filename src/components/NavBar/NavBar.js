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
      <div className="navbar">
        <div className="navigation">
          <Link to="/">Status</Link>
        </div>
        <div className="navigation">
          <Link to="/set-up">Set-up</Link>
        </div>
        <div className="navigation">
          <Link to="/help-and-resources">Help Center</Link>
        </div>
        <div className="navigation">
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
