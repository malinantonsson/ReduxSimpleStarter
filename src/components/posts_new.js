import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input 
					type="text"
					className="form-control"
					{...field.input}
				/>
			</div>
		)
	}

	render() {
		return (
			<form>
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
					name="Content"
					component={this.renderField}
				/>

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
		errors.categories = "Enter a categories!";
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
})(PostsNew);