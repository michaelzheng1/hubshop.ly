import React from "react";
import "./helpCenter.css";
class HelpAndResources extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="col-16">
          <h1>Help Center</h1>
          <div className="card">
            <h5 class="card-header">FAQ</h5>
            <div class="card-body">
              <p class="card-text">
                <p> What is HubShop.ly?</p>
                <p>
                  HubShop.ly, developed by Groove Commerce, is an easy way to
                  automatically sync customer and order data from your eCommerce
                  platform to your HubSpot account, while leveraging the HubSpot
                  cookie for conversion data. The integration currently supports
                  Shopify, BigCommerce and Magento ecommerce platforms. The app
                  allows ecommerce stores to import Order and Abandoned Cart
                  data into their HubSpot portal, which can later be used to
                  automate sales/marketing processes.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpAndResources;
