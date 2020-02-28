import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./SliderCard.css";

class SliderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      score: 0,
      image: ""
    };
  }

  componentDidMount() {
    fetch(`https://api.teleport.org/api/urban_areas/slug:${this.props.city}/`)
      .then(response => response.json())
      .then(response => {
        this.setState({ name: response.name });
      });

    fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.props.city}/images`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ image: response.photos[0].image.mobile });
      });

    fetch(
      `https://api.teleport.org/api/urban_areas/slug:${this.props.city}/scores`
    )
      .then(response => response.json())
      .then(response => {
        const matchingCategory = response.categories.find(category => {
          return category.name === this.props.criterion;
        });

        this.setState({ score: matchingCategory.score_out_of_10 });
      });
  }

  render() {
    return (
      <Card className="SliderCard">
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text>
            <ProgressBar
              variant="success"
              now={this.state.score * 10}
              label={`${Math.round(this.state.score * 10)}%`}
            />
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="secondary">Visit city</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SliderCard;
