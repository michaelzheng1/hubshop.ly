import React from 'react';
import './Status.css';

class Status extends React.Component {
    render() {
        return (
            <div className="status">
                <h1 className="setup-title">Set-ups</h1>

                <div className="status-container">
                    <h1>Status</h1>
                    <div className="flex-container">
                        <div className="section">
                            <p className="section-title">Hubspot ID</p>
                            <p className="section-value">123456</p>
                            <div className="connection">Conntected</div>
                        </div>
                        <div className="section">
                            <p className="section-title">JS Code Connection</p>
                            <h4 className="section-value">NULL</h4>
                            <div className="connection"> Not connected</div>
                        </div>
                        <div className="section">
                            <p className="section-title">Total Orders</p>
                            <h4 className="section-value">15</h4>
                        </div>
                        <div className="section">
                            <p className="section-title">Total Contacts</p>
                            <h4 className="section-value">30</h4>
                            <div className="button-center">
                                <button>Add contacts</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
/*


<p className="section-title">Hubspot ID</p>
                            <h4 className="section-value">123456</h4>
                            <div className="connection">Conntected</div>

                                  <h4 className="section-value">NULL</h4>
                            <div className="connection"> Not connected</div>

                                                        <h4 className="section-value">15</h4>

                                                        <h4 className="section-value">30</h4>
                            <button>Add contacts</button>

*/
export default Status;