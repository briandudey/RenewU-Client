import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './registration-page.css';

import RegistrationForm from './registration';

export function RegistrationPage(props) {
	// If we are logged in (which happens automatically when registration
	// is successful) redirect to the user's LandingPage
	if (props.loggedIn) {
		return <Redirect to="/LandingPage" />;
	}
	return (
		<div className="home reg-container">
			<div className="itemnumber1" />
			<div className="itemnumber2">
				<h2>Begin Your Journey Here</h2>
				<RegistrationForm />
				<br />
				<Link to="/">Login</Link>
			</div>
			<div className="itemnumber3" />
			<div className="footer" />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
