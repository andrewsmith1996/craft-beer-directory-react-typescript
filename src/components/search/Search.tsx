import * as React from "react";
import { SearchText } from '../../interfaces/SearchText.interface';
import { SearchProps } from "../../interfaces/SearchProps.interface";

export default class Search extends React.Component<SearchProps, SearchText> {

  constructor(props: SearchProps) {
    super(props);
    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  state: SearchText = {
    text: ''
  }

  handleSearchUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({text: e.target.value})
  }

  submitSearch() {
    if(!this.state.text) return;
    this.props.onSearchSubmit(this.state.text);
  }

  render() {
    return (
      <div> 
        <div className="flex mb-4">
          <input placeholder="Beer Name" className="mr-4 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-norma" type="text" value={this.state.text} onChange={this.handleSearchUpdate}/>
          <button onClick={this.submitSearch}>Search</button>
        </div>
      </div>
    )
  }
}