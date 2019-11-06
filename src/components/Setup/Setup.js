import React from "react";
import "./Setup.css";

class Setup extends React.Component {
  render() {
    var headHTML = "</head>";

    return (
      <div class="container">
        <div class="col-16">
          <h1>Set-up</h1>
          <div className="card">
            <h5 class="card-header">JS Code Install</h5>
            <div class="card-body">
              <p class="card-text">
                <ol className="setup-list">
                  <li>
                    Copy the Code and paste it right before the {headHTML} in{" "}
                    <a href="#">your themes HTML Head.html template</a>
                    <input></input>
                  </li>
                  <li>
                    {" "}
                    Next, install the tag required for abandoned card
                    functionality. Copy the script and paste it at the very end
                    of
                    <a href="#"> your theme’s cartitem.html</a> and
                    <a href="#"> check out cartitem.html snippets</a>
                    <input></input>
                  </li>
                  <li>
                    {" "}
                    Please make sure to load your front page after installing.
                    <button>Recheck JavaScript Connection Status</button>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;

/*
      <div className="flex-container code">
        <div className="code">
          <h1>JS Code Install</h1>
          <ol>
            <li>
              Copy the Code and paste it right before the {headHTML} in {' '}
              <a href="#">your themes HTML Head.html template</a>
              <input></input>
            </li>
            <li>
              {" "}
              Next, install the tag required for abandoned card functionality.
              Copy the script and paste it at the very end of
              <a href="#">  your theme’s cartitem.html</a> and 
              <a href="#"> check out cartitem.html snippets</a>
              
              <input></input>
            </li>
            <li>
              {" "}
              Please make sure to load your front page after installing.
              <button>Recheck JavaScript Connection Status</button>
            </li>
          </ol>
        </div>
      </div>
      */
  