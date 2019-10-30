import React from "react";
import "./Billing.css";

class Billing extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <div className="payment">
          <h1>Configuration & Billing</h1>
          <div className="tracking-code">
            <p>Install Hubspot Tracking Code in Theme</p>
            <p>Installed</p>
          </div>
          <div className="lifecycle-state">
            <p>Lifecyle State to use for New Orders</p>
            <p>drop down</p>
          </div>
          <div className="bill">
            <h4>Payment Method</h4>
            <div className="left-side">
              <p>MasterCard ending in 0000</p>
              <p>Expires on 7/20</p>
            </div>
            <div className="right-side">
              <p>Edit</p>
              <p>Delete</p>
            </div>
            <div className="add-payment">
              <p>Add Payment Method</p>
            </div>
          </div>
        </div>
        <div className="payment">
          <h1>Deals</h1>
          deals info
        </div>
      </div>

      
    );
  }
}

export default Billing;
