import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeditations } from '../actions/meditation';
import MusicPlayer from 'react-responsive-music-player';
import '../index.css';

export class MeditationPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchMeditations());
	}

	render() {
		const playlist = this.props.meditations;
		const player =
			this.props.meditations && this.props.meditations.length ? (
				<MusicPlayer playlist={playlist} />
			) : null;

		return (
			<div>
				<h1>Relax. Breathe. Begin.</h1>

				<div>{player}</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	meditations: state.meditation.meditations
});

export default connect(mapStateToProps)(MeditationPage);
