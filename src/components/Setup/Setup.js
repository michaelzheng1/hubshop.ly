import React from "react";
import "./Setup.css";

class Setup extends React.Component {
  render() {
    var headHTML = "</head>";

    return (
      <div className="container">
        <div className="col-16 setup">
          <h1>Set-up</h1>
          <div className="card">
            <h5 className="card-header">JS Code Install</h5>
            <div className="card-body">
              <div className="card-text">
                <ol className="setup-list">
                  <div>
                    <div className="row list">
                      <h1 className="listNum">1.</h1>
                      <div className="col-sm">
                        <p className=" code-details">
                          Copy the Code and paste it right before the {headHTML}{" "}
                          in <a href="#">your themes HTML Head.html template</a>
                        </p>
                      </div>
                      <div className="col-sm code-inputbox">
                        <form>
                          <input className="code"></input>
                          <label className="control-label">
                            <a href="#" className="float-right copy">
                              Copy Code
                            </a>
                          </label>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row list">
                      <h1 className="listNum">2.</h1>
                      <div className="col-sm">
                        <p className=" code-details">
                          Next, install the tag required for abandoned card
                            functionality. Copy the script and paste it at the
                            very end of
                          <a href="#"> your theme’s cartitem.html</a> and
                          <a href="#"> check out cartitem.html snippets</a>
                        </p>
                      </div>
                      <div className="col-sm code-inputbox">
                        <form>
                          <input className="code"></input>
                          <label className="control-label">
                            <a href="#" className="float-right copy">
                              Copy Code
                            </a>
                          </label>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row list">
                      <h1 className="listNum">3.</h1>
                      <div className="col-sm">
                        <p className=" code-details">
                          Please make sure to load your front page after
                          installing.
                        </p>
                      </div>

                    </div>
                  </div>

                </ol>
                <button type="button" className="btn float-right btn-default">
                  Recheck JavaScript Connection Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;
