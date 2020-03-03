import React from "react";
import Container from "react-bootstrap/Container";
import ScoreDetails from "../ScoreDetails/ScoreDetails";
import CityTitle from "../Title/CityTitle";
import ButtonToMap from "../Button/ButtonToMap";
import "./CityDetails.css";

class CityDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      details: [],
      name: "",
      coverImage: ""
    };
  }

  componentDidMount() {
    this.fetchCityDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.cityName !== this.props.match.params.cityName) {
      this.fetchCityDetails();
    }
  }

  fetchCityDetails = () => {
    const cityName = this.props.match.params.cityName;

    fetch(`https://api.teleport.org/api/urban_areas/slug:${cityName}/`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          name: response.name
        });
      });

    fetch(`https://api.teleport.org/api/urban_areas/slug:${cityName}/images`)
      .then(response => response.json())
      .then(response => {
        this.setState({ coverImage: response.photos[0].image.web });
      });

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
  };

  render() {
    if (
      this.state.categories.length === 0 ||
      this.state.details.length === 0 ||
      this.state.name.length === 0 ||
      !this.state.coverImage
    ) {
      return null;
    }

    return (
      <Container className="CityDetails">
        <div
          className="cover-image"
          style={{ backgroundImage: `url(${this.state.coverImage})` }}
        >
          <CityTitle city={this.state.name} />
        </div>
        {this.state.categories.map(category => {
          const details = this.state.details.find(
            element => element.label === category.name
          );

          if (!details) {
            return null;
          }

          return (
            <ScoreDetails
              name={category.name}
              score={category.score}
              details={details}
            />
          );
        })}
        <ButtonToMap name={this.props.match.params.cityName} />
      </Container>
    );
  }
}
export default CityDetails;
