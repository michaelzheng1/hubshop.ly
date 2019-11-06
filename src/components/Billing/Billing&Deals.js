import React from "react";
import "./Billing.css";

class Billing extends React.Component {
  render() {
    return (
      <div className="container bill-and-deals">
        <div className="row">
          <div className="col-sm-6">
          <div className="card bill-and-deals">
              <h5 class="card-header">Configuration & Billing</h5>
              <div class="card-body">
                <p class="card-text">
                  <div className="tracking-code">
                    <p>Install Hubspot Tracking Code in Theme</p>
                    <p>Installed</p>
                  </div>
                  <hr className="horizontal-line"></hr>
                  <div className="lifecycle-state">
                    <p>Lifecyle State to use for New Orders</p>
                    <p>drop down</p>
                  </div>
                  <hr className="horizontal-line"></hr>
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
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ">
          <div className="card bill-and-deals">
              <h5 className="card-header">Deals</h5>
              <div className="card-body">
                <p className="card-text">
                  <div className="payment">
                    <div className="sync">
                      <p>
                        Would you like HubShop.ly to sync your orders as Deals
                        in Hubspot?
                      </p>

                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customSwitches"
                        />
                        <label
                          class="custom-control-label"
                          for="customSwitches"
                        ></label>
                      </div>
                    </div>
                    <div className="question">
                      <p>
                        Would you like to associate all orders to a specific
                        pipeline?
                      </p>
                      <select className="mdb-select md-form">
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                    <div className="question">
                      <p>When an order is completed Put it in</p>
                      <select className="mdb-select md-form">
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                    <div className="question">
                      <p>When an order is cancelled, Put it in </p>
                      <select className="mdb-select md-form">
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                    <div className="question">
                      <p>
                        Would you like to associate all orders to a Specific
                        Deal Type?
                      </p>
                      <select className="mdb-select md-form">
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                    <div className="question">
                      <p>
                        Would you like to associate all order to a Specific
                        HubSpot User?
                      </p>

                      <select className="mdb-select md-form">
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;

/*


<div className="section-with-title">
              <div className="payment">
                <h1>Configuration & Billing</h1>
                <div className="tracking-code">
                  <p>Install Hubspot Tracking Code in Theme</p>
                  <p>Installed</p>
                </div>
                <hr className="horizontal-line"></hr>
                <div className="lifecycle-state">
                  <p>Lifecyle State to use for New Orders</p>
                  <p>drop down</p>
                </div>
                <hr className="horizontal-line"></hr>
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
            </div>

    */
