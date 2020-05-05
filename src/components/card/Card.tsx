import * as React from "react";
import { Beer } from '../../interfaces/Beer.interface';

export default class Card extends React.Component<{beer: Beer}, {}> {
  render() {
    if (!this.props.beer) return null;
    return (
      <div className="w-1/3 border border-gray p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">{ this.props.beer.name }</h2>
        <h5 className="text-sm text-gray-600 border-b pb-2 mb-2">{ this.props.beer.tagline }</h5>
        <div className="flex">
          <p className="text-sm mr-6">{ this.props.beer.description }</p>
          <div className="justify-center items-center">
            <img className="w-48" src={this.props.beer.image_url} alt={ this.props.beer.name } />
          </div>
        </div>
      </div>
    )
  }
}