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
        <div className="flex-container code">
          <div className="code">
            <h1>JS Code Install</h1>
            <ol>
              <li>Copy the Code and paste it right before the in your
              themes HTML Head.html template
              <input></input>
              </li>
              <li> Next, install the tag required for abandoned card
              functionality. Copy the script and paste it at the very end of
              your theme’s cartitem.html and check out cartitem.html snippets
              <input></input>
              </li>
              <li> Please make sure to load your front page after installing.
              <button>Recheck JavaScript Connection Status</button>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex-container config">
          <div className="configure">
            <h1>Configuration & Billing</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Status;
