import React from "react";
import "./Accordin.css";
function Billing(props) {
    if (props.display == 'Billing') {
        return (
            <div>
                <h4 className="accordin-heading">Billing</h4>
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseOne">
                                How can I cancel HubShop.ly?
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    The service can be canceled by uninstalling the app from your Shopify,
                                    BigCommerce or Magento store.  On BigCommerce or Shopify, go to the Apps
                                    section of Cart Admin.  Then uninstall the app. This will cancel it. On
                                    Magento, there is a cancellation link at the bottom of the Extension
                                    Configuration page.  Magento > System > Configuration > HubShop.ly. We can
                                    also delete/uninstall the app in our end within our billing module, simply
                                    submit a Support Ticket for help with your cancellation.
                            </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseTwo">
                                Can I get a refund?
                        </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    This is usually handled on a case by case basis, please reach out to Support with
                                    the store name and link. You must contact us within TWO days of the initial charge
                                    to be eligible.
                            </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseThree">
                                Why did my monthly payment increase?
                        </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    There are two different plan tiers, the pricing of each depends on the number of
                                    contacts the customer has in their database. We’ve also found that folks with more c
                                    ontacts require more resources to properly support. For more info:
                                <a href="https://www.hubshop.ly/pricing">https://www.hubshop.ly/pricing</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseFour">
                                How much is HubShop.ly?
                        </h4>
                        </div>
                        <div id="collapseFour" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    Under 25,000 contacts: $99.99 <br></br>25,000 or more contacts: $249.99
                            </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseFive">
                                Can I extend my trial?
                        </h4>
                        </div>
                        <div id="collapseFive" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    Yes, it will be our pleasure to for up to 30 days.
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

export default Billing;
