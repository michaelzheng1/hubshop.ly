
import React from "react";
import "./SearchBar.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      results: []
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    console.log("handlesearch", this.state.term);
    if (this.state.term.length != 0) {
      this.props.history.push(`/selection?term=${this.state.term}`);
      this.props.fetchData({ term: this.state.term, page: 1 });
    }
  }

  render() {
    return (
      <div className="search">
        <div className="row searchbar">
          <input type="text" className="col-md-10 searchTerm" placeholder="Type your questions..." />
          <img src="/src/components/Images/search.png" id="search-icon" />

          <button type="button" className="btn float-right btn-default">
            Search
          </button>
        </div>

      </div>
    );
  }
}


export default Search;

/*
<div className="searchIcon">
          <SearchIcon />
        </div>
        <div className="SearchBar">
          <form onSubmit={this.handleSearch}>
            <div className="Inner-Addon Left-Addon">

              <InputBase
                onChange={this.handleTermChange}
                placeholder="Search By Title"
                className="input"
              />
            </div>
          </form>{" "}
        </div>
        */