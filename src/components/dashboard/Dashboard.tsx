import * as React from "react";
import Search from "../search/Search";
import DashboardTable from "./DashboardTable/DashboardTable";
import { Beer } from "../../interfaces/Beer.interface";
import { CONFIG } from "../../enums/config.enum";

export default class Dashboard extends React.Component<{}, {items: Array<Beer>}> {

  state: any = {
    items: []
  }

  constructor({}) {
    super({});
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(text: string) : void {
    fetch(`${CONFIG.API_URL}/beers?beer_name=${text}`).then(response => response.json()).then(beers => this.setState({items: beers}));
  }

  render() {
    return (
      <div>
        <Search onSearchSubmit={this.handleSubmit} />
        <DashboardTable items={this.state.items}/>
      </div>
    )
  }
}