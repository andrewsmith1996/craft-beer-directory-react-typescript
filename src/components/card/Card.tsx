import * as React from "react";
import { Beer } from '../../interfaces/Beer.interface';

export default class Card extends React.Component<{beer: Beer}, {}> {
  render() {
    if (!this.props.beer) return null;
    return (
      <div>
        <h2>{ this.props.beer.name }</h2>
        <h5>{ this.props.beer.tagline }</h5>
        <p>{ this.props.beer.description }</p>
        <img src={this.props.beer.image_url} alt={ this.props.beer.name } />
      </div>
    )
  }
}