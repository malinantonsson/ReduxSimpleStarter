import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import promise from 'redux-promise';

//we dont have a central app anymore
//import App from './components/app';
import reducers from './reducers';
import PostIndex from './components/post_index';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    
    <Router>
    	<div>
    		<Route path="/" component={PostIndex} />
    	</div>
    </Router>

  </Provider>
  , document.querySelector('.container'));
