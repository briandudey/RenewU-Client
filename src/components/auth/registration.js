import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../../actions/users';
import { login } from '../../actions/auth';
import Input from './input';
import {
	required,
	nonEmpty,
	matches,
	length,
	isTrimmed
} from '../../validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	onSubmit(values) {
		const { email, username, password, firstName, lastName } = values;
		const user = { email, username, password, firstName, lastName };
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	render() {
		return (
			<form
				className="login-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor="firstName">First name</label>
				<Field
					placeholder="first name"
					component={Input}
					type="text"
					name="firstName"
				/>
				<br />
				<label htmlFor="lastName">Last name</label>
				<Field component={Input} type="text" name="lastName" />
				<br />
				<label htmlFor="username">Email</label>
				<Field
					component={Input}
					type="email"
					name="email"
					validate={[required, nonEmpty, isTrimmed]}
				/>
				<br />
				<label htmlFor="username">Username</label>
				<Field
					component={Input}
					type="text"
					name="username"
					validate={[required, nonEmpty, isTrimmed]}
				/>
				<br />

				<label htmlFor="password">Password</label>
				<Field
					component={Input}
					type="password"
					name="password"
					validate={[required, passwordLength, isTrimmed]}
				/>

				<br />
				<label htmlFor="passwordConfirm">Confirm password</label>
				<Field
					component={Input}
					type="password"
					name="passwordConfirm"
					validate={[required, nonEmpty, matchesPassword]}
				/>

				<br />
				<button
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>
					Submit
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
