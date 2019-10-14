import React from 'react';
import './Status.css';

class Status extends React.Component {
    render() {
        return(
            <div className="status">
                <h1 className="setup-title">Set-ups</h1>
                <div className="status-container">
                    <h1>Status</h1>
                    <div className="hubspot-id">
                        <p className="section-title">Hubspot ID</p>
                        <h4 className="section-value">123456</h4>
                        <div className="connection">Conntected</div>
                    </div>
                    <div className="js-code">
                        <p className="section-title">JS Code Connection</p>
                        <h4 className="section-value">NULL</h4>
                        <div className="connection"> Not connected</div>
                    </div>
                    <div className="total-orders">
                        <p className="section-title">Total Orders</p>
                        <h4 className="section-value">15</h4>
                    </div>
                    <div className="total-contacts">
                        <p className="section-title">Total Contacts</p>
                        <h4 className="section-value">30</h4>
                        <button>Add contacts</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Status;