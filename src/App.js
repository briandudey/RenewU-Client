import React from 'react';
import { Route, withRouter } from 'react-router-dom';
// import VideoPage from './components/video-page';
// import MeditationPage from './components/meditation-page';
import { connect } from 'react-redux';
import LoginPage from './components/auth/login-page';
import HeaderBar from './components/auth/header';
import LandingPage from './components/landing-page';
import Dashboard from './components/auth/dashboard';
import RegistrationPage from './components/auth/registration-page';
import VideoPage from './components/video-page';
import MeditationPage from './components/meditation-page';
import { refreshAuthToken } from './actions/auth';

import './App.css';

export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.loggedIn && this.props.loggedIn) {
			// When we are logged in, refresh the auth token periodically
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			// Stop refreshing when we log out
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000 // One hour
		);
	}

	stopPeriodicRefresh() {
		if (!this.refreshInterval) {
			return;
		}

		clearInterval(this.refreshInterval);
	}

	render() {
		return (
			<div className="app">
				<HeaderBar />
				<Route exact path="/LandingPage" component={LandingPage} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/register" component={RegistrationPage} />
				<Route exact path="/watch" component={VideoPage} />
				<Route exact path="/meditation" component={MeditationPage} />
				<Route exact path="/" component={LoginPage} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
