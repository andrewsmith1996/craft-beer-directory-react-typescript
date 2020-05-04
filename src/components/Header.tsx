import * as React from "react";
import Search from "./search/Search";

export default class Header extends React.Component<{}, {}> {
  handleSubmit(text: string) : void {
    console.log(text)
  }
  render() {
    return (
      <div>
        <h1>Welcome to the Craft Beer Directory</h1>
        <Search onSearchSubmit={this.handleSubmit} />
      </div>
    )
  }
}