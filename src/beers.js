import React, { Component } from "react";
console.clear()
export class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((resolve) => resolve.json())
      .then((data) => {
        this.setState({
          beers: data,
        });
      });
  }

  componentDidUpdate() {
    console.log("beers", this.state.beers);
  }

  render() {
    return (
      <ul >
        {this.state.beers.map((beer) => (
          <li>
            <h3>{beer.name}</h3>
            <img
              style={{ height: "150px" }}
              src={beer.image_url}
              alt={beer.name}
            />
            <h4>{beer.description}</h4>
          </li>
        ))}
      </ul>
    );
  }
}

export default Beers;