//Always need to import react into the scope of the file when using JSX
import React, { Component } from 'react';

// define the component class.
// give it all the functionality a react component has
class SearchBar extends Component {

	//first function called whenever a new instance is called
	//used for setup 
	constructor(props) {
		//call the parent method
		super(props);

		//initialize the state
		//we want to record the property term.
		this.state = { term: 'Search' };
	}

	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

// create a connection (export) to index.js
export default SearchBar;