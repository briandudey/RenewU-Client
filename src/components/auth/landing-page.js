// import React from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';

// import LoginForm from './login';

// export function LandingPage(props) {
// 	// If we are logged in redirect straight to LandingPage
// 	if (props.loggedIn) {
// 		return <Redirect to="/LandingPage" />;
// 	}

// 	return (
// 		<div className="home">
// 			<h2>Welcome</h2>
// 			<LoginForm />
// 			<Link to="/register">Register</Link>
// 		</div>
// 	);
// }

// const mapStateToProps = state => ({
// 	loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(LandingPage);
