//Import and define React using js modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

//tried to use template literal to dynamically set the path (so it's DRY)
//failed because import needs a string literal & cannot be dynamic
//const componentsPath = './components/';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//Youtube API key
const API_KEY = 'AIzaSyCIZSpV4OHPehNRI8xARiQjWXIeLGedFNc';
const APP_CONTAINER = document.querySelector('.container');


// create a new component. This component should produce some HTML.
// This is a class. to render it, produce an instance of the class. <App></App>
class App extends Component {
	constructor (props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


// take this component's generated HTML and put it on the page (in the DOM)
// second param is the dom element where the react components is inserted to.
ReactDOM.render(<App />, APP_CONTAINER);