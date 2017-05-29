//Always need to import react into the scope of the file when using JSX
import React, { Component } from 'react';

// define the component class.
// give it all the functionality a react component has
class SearchBar extends Component {
	render() {
		return <input onChange={event => console.log(event.target.value)} />;
	}
}

// create a connection (export) to index.js
export default SearchBar;