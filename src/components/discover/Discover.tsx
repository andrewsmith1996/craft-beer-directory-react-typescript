import * as React from "react";
import Card from "../card/Card";
import { CONFIG } from "../../enums/config.enum";

export default class Discover extends React.Component {

  constructor(props: any){
    super(props);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }
  state: any = {
    randomBeer: null
  }
  componentDidMount() {
    this.getRandomBeer();
  }

  handleRefreshClick() {
    this.getRandomBeer();
  }

  getRandomBeer() {
    fetch(`${CONFIG.API_URL}/beers/random`).then(response => response.json()).then(beer => this.setState({randomBeer: beer[0]}));
  }
  render() {
    return(
      <div className="flex flex-col justify-center">
        <Card beer={this.state.randomBeer} />
        <div className="p-2">
          <h5 className="text-center text-xs font-open-sans cursor-pointer" onClick={this.handleRefreshClick}>Random Recipe</h5>
        </div>
      </div>
    )
  }
}