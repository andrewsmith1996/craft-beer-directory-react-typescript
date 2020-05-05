import * as React from "react";
import { Beer } from "../../../interfaces/Beer.interface";

export default class DashboardTable extends React.Component<{items: Array<Beer>}, {}> {
  render() {
    const itemsList = this.props.items.map((beer: Beer) => <li>{ beer.name }</li>)
    return (
      <div>
        <ul>{ itemsList }</ul>
      </div>
    )
  }
}