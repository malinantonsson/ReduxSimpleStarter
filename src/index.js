//Import and define React using js modules
import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.container');


// create a new component. This component should produce some HTML.
// This is a class. to render it, produce an instance of the class. <App></App>
const App = () => {
	return <div>Hi!</div>;
}


// take this component's generated HTML and put it on the page (in the DOM)
// second param is the dom element where the react components is inserted to.
ReactDOM.render(<App />, container);