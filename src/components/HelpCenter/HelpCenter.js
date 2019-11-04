import React from "react";
import "./helpCenter.css";
class HelpAndResources extends React.Component {
  render() {
    return (
      <div class="container">
          <div class="col-16 faq">
            <h1>FAQ</h1>

          </div>
        <div
          class="accordion md-accordion"
          id="accordionEx"
          role="tablist"
          aria-multiselectable="true"
        >
          <div class="card">
            <div class="card-header" role="tab" id="headingOne1">
              <a
                data-toggle="collapse"
                data-parent="#accordionEx"
                href="#collapseOne1"
                aria-expanded="true"
                aria-controls="collapseOne1"
              >
                <h5 class="mb-0">
                  Collapsible Group Item #1{" "}
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <div
              id="collapseOne1"
              class="collapse show"
              role="tabpanel"
              aria-labelledby="headingOne1"
              data-parent="#accordionEx"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="headingTwo2">
              <a
                class="collapsed"
                data-toggle="collapse"
                data-parent="#accordionEx"
                href="#collapseTwo2"
                aria-expanded="false"
                aria-controls="collapseTwo2"
              >
                <h5 class="mb-0">
                  Collapsible Group Item #2{" "}
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <div
              id="collapseTwo2"
              class="collapse"
              role="tabpanel"
              aria-labelledby="headingTwo2"
              data-parent="#accordionEx"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="headingThree3">
              <a
                class="collapsed"
                data-toggle="collapse"
                data-parent="#accordionEx"
                href="#collapseThree3"
                aria-expanded="false"
                aria-controls="collapseThree3"
              >
                <h5 class="mb-0">
                  Collapsible Group Item #3{" "}
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <div
              id="collapseThree3"
              class="collapse"
              role="tabpanel"
              aria-labelledby="headingThree3"
              data-parent="#accordionEx"
            >
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpAndResources;
