import LoginForm from './login';
import { Link } from 'react-router-dom';
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
				<div className="register-head">
					{/*
						hX tags are designed for defining headers of different levels. That's not what
						it looks like you're doing here.
						If you're using it to describe stylistic choices, you're better off using divs with
						classes instead
					*/}
					<h1>Welcome to Renew-U</h1>
					<h4>Your home for meditation and contemplation</h4>
					<h6>to begin, please login or register</h6>
				</div>
				<div className="log-itemnumber1" />
				<div className="log-itemnumber2">
					<h2>Pause. Breathe. Begin.</h2>
					<LoginForm />
					{/*
						A <br /> indicates that you're trying to make some vertical space. A more appropriate choice might
						be to set the padding or margin of this div
					*/}
					<br />
				</div>
				<div className="log-itemnumber3" />
				<div className="register-now">
					<Link to="/register" className="reg-link">
						Register
						<h6>
							Don't have an account? Join the Renew-U community and register
							today.
						</h6>
					</Link>
					<br />
					<div className="log-footer">
						<p>RenewU - created by Brian Dudey 2018</p>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
