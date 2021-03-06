import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../../actions/auth';
import { required, nonEmpty } from '../../validators';
import './login-page.css';

export class LoginForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}

	render() {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}
		return (
			<form
				className="login-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				{error}
				{/* Doesn't your Input component already have a <label> element in it? */}
				<label htmlFor="username">Username</label>
				<Field
					component={Input}
					type="text"
					name="username"
					id="username"
					validate={[required, nonEmpty]}
				/>
				<label htmlFor="password">Password</label>
				<Field
					component={Input}
					type="password"
					name="password"
					id="password"
					validate={[required, nonEmpty]}
				/>
				<br />
				<button
					className="login-button"
					disabled={this.props.pristine || this.props.submitting}>
					Click to Begin
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
