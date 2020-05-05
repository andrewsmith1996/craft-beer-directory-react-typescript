import * as React from "react";
import Search from "../search/Search";
import DashboardTable from "./DashboardTable/DashboardTable";
import { Beer } from "../../interfaces/Beer.interface";
import { CONFIG } from "../../enums/config.enum";
import Discover from "../discover/Discover";
import Filters from "./Filters/Filters";
import { FilterState } from "../../interfaces/Filters.interface";
import { APIUtils } from "../../utils/API";

export default class Dashboard extends React.Component<{}, {items: Array<Beer>}> {
  state: any = {
    items: []
  }

  constructor({}) {
    super({});
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateFilters = this.updateFilters.bind(this)
  }
  async handleSubmit(text: string) : Promise<void> {
    const beers = await APIUtils.get<Array<Beer>>(`${CONFIG.API_URL}/beers?beer_name=${text}`);
    if(beers) this.setState({ items: beers })
  }

  async updateFilters(filters: FilterState) {
    const beers = await APIUtils.get<Array<Beer>>(`${CONFIG.API_URL}/beers?hops=${filters.hop}`);
    if(beers) this.setState({ items: beers })
  }

  render() {
    return (
      <div>
        <div className="w-2/3 pb-4 mb-4 border-b">
          <Search onSearchSubmit={this.handleSubmit} />
          <Filters onFilterUpdate={this.updateFilters} />
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