import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { Link } from 'react-router-dom';
import './login-page.css';

export class HeaderBar extends React.Component {
	// If I recall `login` is defined in an `actions` file... perhaps this should be defined there as well, rather than
	// inside this component
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		// Only render the log out button if we are logged in
		let logOutButton;
		// With appropriate binding, you can replace
		//    onClick={() => this.logOut()}
		//
		// with
		//    onClick={this.logOut}
		if (this.props.loggedIn) {
			logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
		}
		return (
			<div className="header-bar">
				<Link to="/">{logOutButton}</Link>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
