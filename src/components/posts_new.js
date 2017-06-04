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
					label="Tags"
					name="tags"
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

//kind of like the Connect
//makes it communicate directly to the reducer
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);