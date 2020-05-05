import * as React from "react";
import HopFilters from "./Filters/Hops";
import { FilterUpdate } from "../../../interfaces/FilterActions.interface";
import { FilterState } from "../../../interfaces/Filters.interface";

export default class Filters extends React.Component<FilterUpdate, FilterState> {
  constructor(props: FilterUpdate) {
    super(props)
    this.onHopFilterChange = this.onHopFilterChange.bind(this);
  }
  filterState: FilterState = {
    hop: null
  }
  onHopFilterChange(hopName: string) {
    this.setState({hop: hopName}, () => this.props.onFilterUpdate(this.state));
  }
  render() {
    return (
      <HopFilters onHopFilterChange={this.onHopFilterChange }/>
    )
  }
}