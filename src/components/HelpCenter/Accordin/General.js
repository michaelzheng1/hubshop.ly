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
                                    Hubshop.ly finds solutions to recover abandoned carts, allows your 
                                    business to create automated emails and workflows, and provides advanced 
                                    reporting and segmentation.
                            </p>
                            </div>
                        </div>
                    </div>
                     <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseThree">
                                What platforms does Hubshop.ly integrate with?
                        </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    BigCommerce, Shopify, and Magento
                            </p>
                            </div>
                        </div>
                    </div>
                     <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseFour">
                                How often does data sync between Bigcommerce and Hubspot?
                        </h4>
                        </div>
                        <div id="collapseFour" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    BigCommerce instantly pushes new/updated data to its API, which is what 
                                    Hubshop.ly uses to import data into Hubspot. On the other end, Hubspot’s
                                     API itself is not as fast. It usually takes 15-20 min for it to update 
                                     its records after Hubshop.ly makes the call for your BigCommerce store. 
                                     We recommend setting 20-30 min delays for automated workflow triggers. 
                            </p>
                            </div>
                        </div>
                    </div>
                     <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseFive">
                               Can Hubshop.ly back-add Bigcommerce orders?
                        </h4>
                        </div>
                        <div id="collapseFive" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    No, orders cannot be back-added.
                            </p>
                            </div>
                        </div>
                    </div>
                      <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseSix">
                               Does Hubshop.ly have any workflow automations that come with the installation?
                        </h4>
                        </div>
                        <div id="collapseSix" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                   There are no Workflow automations that come preloaded with the Hubshop.ly 
                                   subscription, but you are more than welcome to create workflows that leverage 
                                   customer order data as Workflow triggers to personalize the experience.
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
