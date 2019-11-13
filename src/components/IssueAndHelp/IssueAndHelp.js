import React from "react";
import "./IssueAndHelp.css";

class IssueAndHelp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card issue-and-help">
              <h5 className="card-header">Issue with a specific contact?</h5>
              <div className="card-body">
                <div className="card-text">
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
                  <button type="button" className="btn float-right btn-default">
                    Sync
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card issue-and-help">
              <h5 className="card-header">Help and resources</h5>
              <div className="card-body">
                <div className="card-text">
                  <div className="row">
                    <img
                      className="resource-icon"
                      src="/src/components/Images/envelope.png"
                    />
                    <p>
                      Contact us anytime at{" "}
                      <a href="#">Support@GrooveCommerce.com</a>
                    </p>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        className="resource-icon"
                        src="/src/components/Images/books.png"
                      />
                      <p>
                        E-book resources available at{" "}
                        <a href="#">HubShop.ly/Resources</a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        E-books help you to install as well as better make use
                        of HubShop.ly
                      </p>
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

export default IssueAndHelp;
