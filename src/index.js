import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import promise from 'redux-promise';

//we dont have a central app anymore
//import App from './components/app';
import reducers from './reducers';
import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    
    <Router>
    	<div>
    		<Switch>
	    		<Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostShow} />
	    		<Route path="/" component={PostIndex} />
	    	</Switch>
    	</div>
    </Router>

  </Provider>
  , document.querySelector('.container'));
