import React from 'react';
import { connect } from 'react-redux';
import { fetchMeditations } from '../actions/meditation';
import MusicPlayer from 'react-responsive-music-player';
import './meditation-page.css';
// import Timer from './timer';

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
				<div className="wrapper">
					<div className="header">
						<h1>Relax. Breathe. Begin.</h1>
					</div>
					<div className="water" />

					<div className="music">{player}</div>
					<div className="timer" />
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	meditations: state.meditation.meditations
});

export default connect(mapStateToProps)(MeditationPage);
