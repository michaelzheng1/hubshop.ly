import React from 'react';
import './Status.css';

class Status extends React.Component {
    render() {
        return(
          <div className="status">
              <div className="status-container">
              <h1>Status</h1>
              <div className="status-info">
                <div>HubSpot ID</div>
                <div>
                HubSpot Connection
                <br/>
                <button>Reconnect</button>
                </div>
                <div>
                HubShop.ly Connection
                <br/>
                <button>Reconnect now</button>
                </div>
              </div>
              </div>
          </div>
        );
    }
}

export default Status;
