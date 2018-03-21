import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
	class Authentication extends Component {
		static contectTypes = {
			router: React.PropTypes.object
		};
		componentWillMount() {
			if (!this.props.authenticated) {
				this.contect.router.push('/login');
			}
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				this.conetext.router.push('/login');
			}
		}
		render() {
			return <ComposedComponent {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return { authenticated: state.auth.authenticated };
	}
	return connect(mapStateToProps)(Authentication);
}
