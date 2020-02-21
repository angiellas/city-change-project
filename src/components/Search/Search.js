import React from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.css";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";

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
  };

  componentDidMount() {
    fetch("https://api.teleport.org/api/urban_areas/")
      .then(response => response.json())
      .then(response => {
        const cityNames = response._links["ua:item"];

        this.setState({ cityNames: cityNames });
      });
  }

  render() {
    return (
      <FormGroup>
        <InputGroup>
          <Typeahead
            labelKey="name"
            onChange={s => {
              this.setState({ search: s[0] });
            }}
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
      </FormGroup>
    );
  }
}

export default Search;
