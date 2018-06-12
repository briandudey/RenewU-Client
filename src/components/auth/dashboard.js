import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../../actions/protected-data';

/*
 * Are you familiar with Functional components? If not, we should talk about them.
 * They are an interesting way to make things a lot easier to test
 */
export class Dashboard extends React.Component {
	componentDidMount() {
		// It might make more sense to pop this call one level up the content stack... you never
		// actually directly interact with the results of this call... it's done indirectly via a
		// property that is passed in... perhaps this call should take place at that level too?
		this.props.dispatch(fetchProtectedData());
	}

	render() {
		return (
			<div className="dashboard">
				<div className="dashboard-username">
					Username: {this.props.username}
				</div>
				<div className="dashboard-name">Name: {this.props.name}</div>
				<div className="dashboard-protected-data">
					Protected data: {this.props.protectedData}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		name: `${currentUser.firstName} ${currentUser.lastName}`,
		protectedData: state.protectedData.data
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
