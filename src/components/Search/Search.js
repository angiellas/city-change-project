import React from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.css";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";
import InputGroup from "react-bootstrap/InputGroup";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      cityNames: []
    };
  }

  onSearch = () => {
    if (!this.state.search) {
      return;
    }

    const url = this.state.search.href;
    const slugIndex = url.lastIndexOf(":") + 1;
    const slug = url.substr(slugIndex).slice(0, -1);

    this.props.history.push(`/city/${slug}`);
  };

  componentDidMount() {
    fetch("https://api.teleport.org/api/urban_areas/")
      .then(response => response.json())
      .then(response => {
        const cityNames = response._links["ua:item"];

        this.setState({ cityNames: cityNames });
      });
  }

  handleKeyPress = event => {
    if (event.keyCode === 13) {
      this.onSearch();
    }
  };

  handleChange = search => {
    this.setState({ search: search[0] });
  };

  render() {
    return (
      <InputGroup>
        <Typeahead
          labelKey="name"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
          options={this.state.cityNames}
          placeholder="Where would you like to go..."
          id="search-city"
        />

        <InputGroup.Append>
          <Button variant="outline-warning" onClick={this.onSearch}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default withRouter(Search);
