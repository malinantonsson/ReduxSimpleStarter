import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input 
					type="text"
					className="form-control"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPost(values);
	}

	render() {
		// comes from the reduxForm helper
		// 
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title" 
					name="title"
					component={this.renderField}
				/>

				<Field 
					label="Categories"
					name="categories"
					component={this.renderField}
				/>

				<Field 
					label="Post Content"
					name="content"
					component={this.renderField}
				/>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>

			</form>
		);
	}
}

//validate the form & add it to the reduxForm helper as an option called validate
function validate(values) {
	const errors = {};

	//Validate the pinpit from the 'values' object
	if(!values.title) {
		errors.title = "Enter a title!";
	}

	if(!values.categories) {
		errors.categories = "Enter a category!";
	}

	if(!values.content) {
		errors.content = "Enter a content!";
	}


	//if errors is empty the form is valid, go and submit.
	//otherwise it faild validation
	return errors;
}

//kind of like the Connect
//makes it communicate directly to the reducer
export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null,{ createPost})(PostsNew)
);