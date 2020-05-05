import * as React from "react";
import { Ingredients, Hop, Malt } from '../../../interfaces/Beer.interface';

export default class IngredientsList extends React.Component<{ingredients: Ingredients}, {}> {
  render() {
    const hops = this.props.ingredients.hops.map((hop: Hop) => <li>{ hop.name },&nbsp;</li>);
    const malts = this.props.ingredients.malt.map((malt: Malt) => <li>{ malt.name },&nbsp;</li>);
    return (
      <div className="flex flex-col text-xs font-open-sans">
        <div className="flex">
          <span className="mr-1 text-bold">Hops:</span> <ul className="flex">{ hops }</ul>
        </div>
        <div className="flex">
          <span className="mr-1 text-bold">Malts:</span> <ul className="flex">{ malts }</ul>
        </div>
        <div className="flex">
          <span className="mr-1 text-bold">Yeast:</span> <ul className="flex">{ this.props.ingredients.yeast }</ul>
        </div>
      </div>
    )
  }
}