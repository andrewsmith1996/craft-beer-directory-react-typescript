import * as React from "react";
import { FilterActions } from "../../../../interfaces/FilterActions.interface";

export default class HopFilters extends React.Component<FilterActions, {}> {
  constructor(props: FilterActions) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.props.onHopFilterChange(e.target.value);
  }

  render() {
    const hops = [
      "Admiral",
      "Ahtanum" ,
      "AlphAroma",
      "Amarillo",
      "Apollo",
      "Bramling Cross",
      "Bravo",
      "Brewer's Gold",
      "Bullion",
      "Calicross",
      "Cascade (U.S.)",
      "Centennial",
      "Citra",
      "Challenger",
      "Chinook",
      "Cluster",
      "Columbus",
      "Crystal" ,
      "East Kent Golding" ,
      "Eroica",
      "First Gold",
      "Fuggle (U.K.)" ,
      "Galena",
      "Galaxy",
      "Glacier",
      "Green Bullet",
      "Hallertau Aroma" ,
      "Hallertau" ,
      "Hallertauer Magnum",
      "Hallertauer Mittelfruh" ,
      "Hallertauer Taurus",
      "Hallertauer Tradition" ,
      "Herald",
      "Hersbrucker" ,
      "Hersbrucker Pure" ,
      "Horizon",
      "Huller Bitterer",
      "Liberty" ,
      "Lublin (Lubelski)" ,
      "Marynka",
      "Merkur",
      "Mount Hood" ,
      "Mosaic",
      "Newport",
      "Northdown",
      "Nugget",
      "Opal",
      "Orion",
      "Outeniqua",
      "Pacific Gem",
      "Pacific Hallertau" ,
      "Pacific Sunrise",
      "Palisade" ,
      "Perle (GR)",
      "Perle (US)",
      "Phoenix",
      "Pioneer",
      "Saaz" ,
      "Santiam" ,
      "Satus",
      "Simcoe",
      "Southern Brewer",
      "Southern Promise",
      "Southern Star",
      "Spalt" ,
      "Spalter Select" ,
      "Sterling",
      "Sticklebract",
      "Strisselspalt" ,
      "Styrian Golding" ,
      "Summit",
      "Super Alpha",
      "Super Pride",
      "Super Styrian (Aurora)",
      "Target",
      "Tettnanger (US)",
      "Ultra" ,
      "Vanguard" ,
      "Victoria",
      "Warrior",
      "Willamette" ,
      "Pacific Jade",
    ]
    const hopOptions = hops.map((hopName: string) => <option value={ hopName} > { hopName }</option>);

    return (
      <select onChange={this.handleFilterChange}>
        <option value="">Hop</option>
        { hopOptions }
      </select>
    )
  }
}