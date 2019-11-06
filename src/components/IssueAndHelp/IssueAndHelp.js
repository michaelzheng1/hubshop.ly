import React from "react";
import "./IssueAndHelp.css";

class IssueAndHelp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card issue-and-help">
              <h5 class="card-header">Issue with a specific contact?</h5>
              <div class="card-body">
                <p class="card-text">
                  <p>
                    Enter the email ID below to resync order data with a contact
                    proprety. This may take upto 15 minutes.
                  </p>
                  <form action="/action_page.php">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Enter your Message"
                        id="textarea"
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                  <button type="button" class="btn float-right btn-default">
                    Sync
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card issue-and-help">
              <h5 class="card-header">Help and resources</h5>
              <div class="card-body">
                <p class="card-text">
                  <div clssName="row">
                    <div className="col-2">
                    <img src="/src/components/Images/envelope.png" />
                    </div>
                    <div className="col-10">
                    <p>
                      Contact us anytime at{" "}
                      <a href="#">Support@GrooveCommerce.com</a>
                    </p>
                    </div>
                  </div>
                  <div className="contact">
                   
                  </div>
                  <div className="resources">
                    <p>
                      E-book resources available at{" "}
                      <a href="#">HubShop.ly/Resources</a>
                    </p>
                    <p>
                      E-books help you to install as well as better make use of
                      HubShop.ly
                    </p>
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

export default IssueAndHelp;
