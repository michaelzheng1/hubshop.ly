import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
/*
handleEventKey = (eventKey) => {
    console.log(eventKey);
    // whatever write here...
}
*/

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tab: "status" };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        console.log("eventkey", eventKey);
    }
    /*
     handleSelect = () => {
        if (key === 1)
            this.setState({ heading: "Log in" })
        else
            this.setState({ heading: "Sign up" })
    }
    */
  render() {
    return (
        <Tabs defaultActiveKey="status" className="navbar" onSelect={this.handleSelect()}>
        <Tab eventKey="status" title="Status" className="navigation">
          <Link to="/"></Link>
        </Tab>
        <Tab eventKey="setup" title="Set-up" className="navigation">
          <Link to="/set-up"></Link>
        </Tab>
        <Tab
          eventKey="contact"
          title="FAQ and Contact"
          className="navigation"
        ></Tab>
        <Tab
          eventKey="resources"
          title="E-book and Resources"
          className="navigation"
        ></Tab>
        <Tab eventKey="blog" title="Blog" className="navigation"></Tab>
      </Tabs>
    );
  }
}

export default Navbar;
