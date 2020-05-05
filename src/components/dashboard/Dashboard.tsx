import * as React from "react";
import Search from "../search/Search";
import DashboardTable from "./DashboardTable/DashboardTable";
import { Beer } from "../../interfaces/Beer.interface";
import { CONFIG } from "../../enums/config.enum";
import Discover from "../discover/Discover";

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
        <div className="w-2/3">
          <Search onSearchSubmit={this.handleSubmit} />
        </div>
        <div className="flex">
          <div className="w-2/3 mr-4">
            <DashboardTable items={this.state.items}/>
          </div>
          <div className="w-1/3">
            <Discover />
          </div>
        </div>
      </div>
    )
  }
}