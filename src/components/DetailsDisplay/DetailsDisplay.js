import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DetailsDisplay.css";

class DetailsDisplay extends React.Component {
  formatValue = (value, type) => {
    switch (type) {
      case "currency_dollar":
        return `$${value}`;

      case "float":
        return Number(value).toFixed(2);

      case "percent":
        return `${Number(value * 100).toFixed(2)}%`;

      default:
        return value;
    }
  };

  render() {
    const { data } = this.props;

    return (
      <Row className={"DetailsDisplay"}>
        <Col>
          <ul>
            {data.map(breakDown => (
              <li className="text-break p-1 m-3">
                <span className="title">
                  {breakDown.label.replace(" [Teleport score]", "")}:{" "}
                </span>
                <strong>
                  {this.formatValue(
                    breakDown[`${breakDown.type}_value`],
                    breakDown.type
                  )}{" "}
                </strong>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default DetailsDisplay;
