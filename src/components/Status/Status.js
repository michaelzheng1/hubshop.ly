import React from "react";

import "./Status.css";

class Status extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="hubspot">
          Hubspot ID:
          <span className="id">123456</span>
        </h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="section">
            <div className="connect-status">
              <h1 className="connected-green">Connected</h1>
              <h4 className="connected-detail">Hubspot Connection</h4>
            </div>
            <div>
              {" "}
              <hr className="vertical-line"></hr>
            </div>
            <div className="connect-status">
              <h1 className="connected-yellow">No Conntected</h1>
              <h4 className="connected-detail">eCommerce Connection</h4>
            </div>
            </div>
          </div>
          <div className="col-sm-6">
          <div className="section">
            
          <div className="number-section">
              <h1 className="number">50</h1>
              <h4 className="number-descrip">Total order synced</h4>
            </div>
            <div>
              {" "}
              <hr className="vertical-line"></hr>
            </div>
            <div className="number-section">
              <h1 className="number">50</h1>
              <h4 className="number-descrip">Total contacts</h4>
            </div> </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Status;
