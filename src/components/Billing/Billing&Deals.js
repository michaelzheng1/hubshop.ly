import React from "react";
import "./Billing.css";

class Billing extends React.Component {
  render() {
    return (
      <div class="container bill-and-deals">
        <div class="row">
          <div class="col-sm-6 billing">
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
          <div class="col-sm-6 billing">
            <div className="payment">
              <h1>Deals</h1>
              <div className="sync">
                <p>
                  Would you like HubShop.ly to sync your orders as Deals in
                  Hubspot?
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
                  Would you like to associate all orders to a specific pipeline?
                </p>
                <select class="mdb-select md-form">
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
                <select class="mdb-select md-form">
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
                <select class="mdb-select md-form">
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
                  Would you like to associate all orders to a Specific Deal
                  Type?
                </p>
                <select class="mdb-select md-form">
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
                  Would you like to associate all order to a Specific HubSpot
                  User?
                </p>

                <select class="mdb-select md-form">
                  <option value="" disabled selected>
                    Choose your option
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
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




                <div class="col-sm-5">
      <button type="button" class="btn btn-sm btn-secondary btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    */
