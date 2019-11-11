import React from "react";
import "./Billing.css";

class Billing extends React.Component {
  render() {
    return (
      <div className="container bill-and-deals">
        <div className="row">
          <div className="col-sm-6">
            <div className="card bill-and-deals">
              <h5 className="card-header">Configuration & Billing</h5>
              <div className="card-body">
                <div className="card-text">
                  <div className="row">
                    <div className="col-sm-6">
                      <p>Install Hubspot Tracking Code in Theme</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="right-side installed">Installed
                      <img className="circle-status" src="/src/components/Images/check_circle.png" alt="checked_circle" />
                      </p>
                    </div>
                  </div>

                  <hr className="horizontal-line"></hr>

                  <div className="row">
                    <div className="col-sm-5">
                      <p>Lifecyle State to use for New Orders</p>
                    </div>
                    <div className="col-sm-7">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdownMenuButton"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Customers
                          <img src="/src/components/Images/arrow_down.png" />

                        </button>
                        <div
                          className="dropdown-menu billing"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="horizontal-line"></hr>

                  <div className="bill">
                    <h4>Payment Method</h4>
                    <div className="bill-section">
                      <div className="row">
                        <div className="col-md-6">
                          <p>MasterCard ending in <strong>0000</strong></p>
                        </div>
                        <div className="col-md-6">
                          <a href="#" className="right-side">
                            Edit
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <p>Expires on <strong>7/20</strong></p>
                        </div>
                        <div className="col-md-6">
                           <a href="#" className="right-side">
                            <font color="black">Delete</font>
                          </a>
                        </div>
                      </div>
                         <a href="#" className="right-side add-payment">
                            <img id="add-circle" src="/src/components/Images/add_circle.png" alt="add_circle" />
                            Add Payment Method
                          </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 ">
            <div className="card bill-and-deals">
              <h5 className="card-header">Deals</h5>
              <div className="card-body">
                <div className="card-text">
                  <div className="payment">
                    <div className="row">
                      <div className="col-md-10">
                        <p>
                          Would you like HubShop.ly to sync your orders as Deals
                          in Hubspot?
                        </p>
                      </div>
                      <div className="col-md-2">
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customSwitches"
                          />
                          <label
                            className="custom-control-label"
                           
                          ></label>
                        </div>
                      </div>
                    </div>

                    <p>
                      Would you like to associate all orders to a specific
                      pipeline?
                    </p>

                    <div className="dropdown">
                      <button
                        className="btn btn-secondary btn-block dropdownMenuButtonDeals"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sales Pipline
                        <img src="/src/components/Images/arrow_down.png" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>

                    <div className="question">
                      <p>When an order is completed Put it in</p>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary btn-block dropdownMenuButtonDeals"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Closed Won
                        <img src="/src/components/Images/arrow_down.png" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>

                    <div className="question">
                      <p>When an order is cancelled, Put it in </p>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary btn-block dropdownMenuButtonDeals"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Closed Lost
                        <img src="/src/components/Images/arrow_down.png" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>

                    <div className="question">
                      <p>
                        Would you like to associate all orders to a Specific
                        Deal Type?
                      </p>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary btn-block dropdownMenuButtonDeals"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Closed Lost
                        <img src="/src/components/Images/arrow_down.png" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>

                    <div className="question">
                      <p>
                        Would you like to associate all order to a Specific
                        HubSpot User?
                      </p>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary btn-block dropdownMenuButtonDeals"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Closed Lost
                        <img src="/src/components/Images/arrow_down.png" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
