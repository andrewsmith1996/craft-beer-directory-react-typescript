import * as React from "react";
import { Beer } from '../../interfaces/Beer.interface';

export default class Card extends React.Component<{beer: Beer}, {}> {
  render() {
    if (!this.props.beer) return null;
    return (
      <div className="w-full border border-gray p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-arvo font-bold">{ this.props.beer.name }</h2>
        <h5 className="text-xs font-open-sans text-gray-600 border-b pb-2 mb-2 flex justify-between items-center"><span>{ this.props.beer.tagline }</span><span>{this.props.beer.abv}%</span></h5>
        <div className="flex">
          <p className="text-sm mr-6 font-open-sans">{ this.props.beer.description }</p>
          <div className="flex justify-center items-center">
            <img className="w-56" src={this.props.beer.image_url} alt={ this.props.beer.name } />
          </div>
        </div>
      </div>
    )
  }
}