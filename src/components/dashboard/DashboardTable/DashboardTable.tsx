import * as React from "react";
import { Beer } from "../../../interfaces/Beer.interface";
import DashboardTableItem from "../DashboardTableItem/DashboardTableItem";

export default class DashboardTable extends React.Component<{items: Array<Beer>}, {}> {
  render() {
    const itemsList = this.props.items.map((beer: Beer) => <li><DashboardTableItem beer={ beer }/></li>);
    return (
      <div>
        <ul>{ itemsList }</ul>
      </div>
    )
  }
}