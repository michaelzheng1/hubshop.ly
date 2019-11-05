import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
              <h1>Blog</h1>
              <p>
                <h2>Big Commerce Pricing: Choose the right plan for you</h2>
                The more you know about your ecommerce customers, the better
                you'll be able to create value for them in your products and
                your marketing. The more value you create for your customers,
                the more value they'll create...
                <button type="button" class="btn btn-primary">Read Article
                </button>
              </p>
              <img src="/src/components/Images/bigcommerce.png"/>
              <span>View more on GrooveCommerce Blog</span>
            </div>
        );
    }
}

export default Blog;
