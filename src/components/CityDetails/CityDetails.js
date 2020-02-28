import React from "react";
import Container from "react-bootstrap/Container";
import ScoreDetails from "../ScoreDetails/ScoreDetails";
import "./CityDetails.css";

class CityDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      details: []
    };
  }

  componentDidMount() {
    const cityName = this.props.match.params.cityName;

    fetch(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores`)
      .then(response => response.json())
      .then(response => {
        const categories = response.categories.map(category => {
          return {
            name: category.name,
            score: category.score_out_of_10
          };
        });

        this.setState({ categories });
      });

    fetch(`https://api.teleport.org/api/urban_areas/slug:${cityName}/details`)
      .then(response => response.json())
      .then(response => {
        const details = response.categories;
        this.setState({ details });
      });
  }

  render() {
    if (this.state.categories.length === 0 || this.state.details.length === 0) {
      return null;
    }

    return (
      <Container className="CityDetails">
        <h1>City Details</h1>
        {this.state.categories.map(category => {
          const details = this.state.details.find(
            element => element.label === category.name
          );

          return (
            <ScoreDetails
              name={category.name}
              score={category.score}
              details={details}
            />
          );
        })}
      </Container>
    );
  }
}
export default CityDetails;
