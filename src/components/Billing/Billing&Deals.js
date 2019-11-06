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
                  <div className="row">
                    <div className="col-sm-9">
                      <p>Install Hubspot Tracking Code in Theme</p>
                    </div>
                    <div class="col-sm-3">
                      <p class="right-side">Installed</p>
                    </div>
                  </div>

                  <hr className="horizontal-line"></hr>

                  <div className="row">
                    <div className="col-md-6">
                      <p>Lifecyle State to use for New Orders</p>
                    </div>
                    <div className="col-md-6">
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdownMenuButton"
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
                          class="dropdown-menu billing"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
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
                          <p>MasterCard ending in 0000</p>
                        </div>
                        <div className="col-md-6">
                          <p className="right-side">Edit</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <p>Expires on 7/20</p>
                        </div>
                        <div className="col-md-6">
                          <p className="right-side">Delete</p>
                        </div>
                      </div>
                      <p className="right-side">Add Payment Method</p>
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
                    <div class="row">
                      <div class="col-md-10">
                        <p>
                          Would you like HubShop.ly to sync your orders as Deals
                          in Hubspot?
                        </p>
                      </div>
                      <div class="col-md-2">
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
                    </div>

                    <p>
                      Would you like to associate all orders to a specific
                      pipeline?
                    </p>

                    <div class="dropdown">
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
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>

                    <div className="question">
                      <p>When an order is completed Put it in</p>
                    </div>
                    <div class="dropdown">
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
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
                    </div>

                    <div className="question">
                      <p>When an order is cancelled, Put it in </p>
                    </div>
                    <div class="dropdown">
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
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
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
                    <div class="dropdown">
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
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
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
                    <div class="dropdown">
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
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </div>
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
