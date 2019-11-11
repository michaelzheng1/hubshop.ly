import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-16">
          <h1>Blog</h1>
          <div className="card">
            <h5 className="card-header">Blog</h5>
            <div className="card-body">
              <div className="card-text">

                <h2>Big Commerce Pricing: Choose the right plan for you</h2>
                <p>
                  The more you know about your ecommerce customers, the better
                  you'll be able to create value for them in your products and
                  your marketing. The more value you create for your customers,
                  the more value they'll create...
                  </p>
                <button type="button" class="btn btn-primary">
                  Read Article
                  </button>

                <img src="/src/components/Images/bigcommerce.png" />
                <span>View more on GrooveCommerce Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
