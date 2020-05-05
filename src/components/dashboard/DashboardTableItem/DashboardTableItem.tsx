import * as React from "react";
import { Beer } from '../../../interfaces/Beer.interface';
import IngredientsList from "../Ingredients/Ingredients";

export default class DashboardTableItem extends React.Component<{beer: Beer}, {}> {
  render() {
    if (!this.props.beer) return null;
    return (
      <div className="border border-gray p-4 rounded-lg shadow-l mb-4">
        <div className="border-b pb-2 mb-2">
          <h2 className="text-2xl font-arvo font-bold">{ this.props.beer.name }</h2>
          <h5 className="text-xs font-open-sans text-gray-600 border-b pb-2 mb-2 flex justify-between items-center"><span>{ this.props.beer.tagline }</span><span>{this.props.beer.abv}%</span></h5>
          <p className="text-sm mr-6 font-open-sans">{ this.props.beer.description }</p>
        </div>
        <IngredientsList ingredients={ this.props.beer.ingredients } />
      </div>
    )
  }
}