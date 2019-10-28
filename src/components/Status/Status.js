import React from "react";
import "./Status.css";

class Status extends React.Component {
  render() {
    return (
      <div className="status">
        <div className="hubspot-id">
          <h1 className="hubspot">
            Hubspot ID:
            <span className="id">123456</span>
          </h1>
        </div>
        <div className="flex-container">
          <div className="flex-container status">
            <div className="connect-status">
              <h1>Connected</h1>
              <h4>Hubspot Connection</h4>
            </div>
            <div className="connect-status">
              <h1 className="connection">No Conntected</h1>
              <h4>eCommerce Connection</h4>
            </div>
          </div>
          <div className="flex-container status">
            <div className="number-section">
              <h1 className="number">50</h1>
              <h4 className="number-descrip">Total order synced</h4>
            </div>
            <div className="number-section">
              <h1 className="number">50</h1>
              <h4 className="number-descrip">Total contacts</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
