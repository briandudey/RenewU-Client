import LoginForm from './login';

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './login-page.css';

export function LoginPage(props) {
	// If we are logged in (which happens automatically when registration
	// is successful) redirect to the user's LandingPage
	if (props.loggedIn) {
		return <Redirect to="/LandingPage" />;
	}
	return (
		<div>
			<div className="home log-container">
				<div className="log-itemnumber1" />
				<div className="log-itemnumber2">
					<h2>Pause. Breathe. Begin.</h2>
					<LoginForm />
					<br />
				</div>
				<div className="log-itemnumber3" />
				<div className="log-footer" />
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
