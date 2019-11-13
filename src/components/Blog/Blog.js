import React from "react";
import "./Blog.css"

class Blog extends React.Component {
  render() {
    return (
      <div className="container blog-section">
        <div className="col-16">
          <h1>Blog</h1>
          <div className="card">
            <h5 className="card-header">Blog</h5>
            <div className="card-body">
              <div className="card-text blog-container">
                <div className="row">
                <div className="col-sm-6 text">
                <h2>Big Commerce Pricing:
                <br/>
                Choose the right plan for you</h2>
                <p>
                  The more you know about your ecommerce customers, the better
                  you'll be able to create value for them in your products and
                  your marketing. The more value you create for your customers,
                  the more value they'll create...
                  </p>
                  <button type="button" class="btn-default">
                    Read Article
                    </button>
                </div>
                <div className="col-sm-6 picture">
                <img src="/src/components/Images/bigcommerce.png" />
                </div>
              </div>
              <div className="row">
              <div className="col-sm-12">
              <a href ="https://www.groovecommerce.com/ecommerce-blog" className="right-side View_more">View more on GrooveCommerce Blog</a>
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

export default Blog;
