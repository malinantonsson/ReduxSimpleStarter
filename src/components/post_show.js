import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends Component {
	componentDidMount() {
		//get the id from the url
		//if comes from the router definition
		const { id } = this.props.match.params; 
		this.props.fetchPost(id);
	}

	render() {
		const { post } = this.props;

		if(!post) {
			return <div>Loading...</div>
		}
		
		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}


function mapStateToProps({ posts }, ownProps) {
	//pull off the post we need
	return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostShow);