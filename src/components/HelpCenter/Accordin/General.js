import React from "react";
import "./Accordin.css";
function General(props) {
    if (props.display == 'General') {
        return (
            <div>
                <h4 className="accordin-heading">General qeustions</h4>
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseOne">
                                What is HubShop.ly?
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse">
                            <div className="panel-body">
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
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseTwo">
                                What are the key features of Hubshop.ly?
                        </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="panel-body">
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
                            </div>
                        </div>
                    </div>
                    <hr id="lastHr"></hr>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default General;
