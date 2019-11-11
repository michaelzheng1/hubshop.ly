  
import React from "react";

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
          <div className="input-group mb-4 border rounded-pill p-1">
            <div className="input-group-prepend border-0">
              <button id="button-addon4" type="button" className="btn btn-link text-info">
                  <img src="src/components/Images/search.png"/>
              </button>
              <input type="search" placeholder="What're you searching for?"  className="form-control bg-none border-0"/>
             
            </div>
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