import React from "react";

function Benefits(props) {
    console.log("this is props inside of general ", props);

    if (props.display == 'Benefits') {
        return (
            <div>
                <h4 className="accordin-heading">Why Hubshop.ly?</h4>
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseOne">
                                How is this solution better than Zapier?
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    Zapier is a tool that purely moves data from one app to another.  
                                    HubShop.ly maintains the HubSpot cookie and merges with your cart cookie, 
                                    that you can actually ‘close the loop’ with your efforts.  While Zapier 
                                    is just like importing a spreadsheet so none of the conversion data is tracked.
                            </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseTwo">
                               How are you different from Revenue Conduit?
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    For Bigcommerce and Shopify, our app is a 1-click install that allows you
                                     to get started in minutes.  For Magento, you just need to install a simple 
                                     extension and adjust some permissions. HubShop.ly has a full CRM integration.
                                      For those that want to install multiple stores into 1 HubSpot. We organize 
                                      the data in such a way that this makes more sense by creating a property 
                                      group for each store, while they mix the data together.  They have a 
                                      personalized ‘coupon generator’ - which is still pretty manual and most 
                                      people don’t use once they realize the effort.
                            </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseThree">
                                Can I sync more than one store with a single HubSpot instance?
                        </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    Yes - You can connect multiple eCommerce sites to one HubSpot portal, though 
                                    each site would require you to have its own subscription.  This is due to how 
                                    the app store work. Each store will create a new property group that contains 
                                    the data for that store, though the profile (name, address, phone, email) 
                                    that are shared in the Contact record.  You can also assign each store to its 
                                    own sales pipeline or a single one.
                            </p>
                            </div>
                        </div>
                    </div>
                     <hr></hr>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title" data-toggle="collapse" data-target="#collapseFour">
                                What is the big difference between Hubspot plugin and the integration that is already free in Shopify?
                        </h4>
                        </div>
                        <div id="collapseFour" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>
                                    HubShop.ly tracks a lot more data points that are available via the API than the native Shopify 
                                    integration to give you customers a more-personalized experience with your store.
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
export default Benefits;
