import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
						<Link to="/LandingPage">
							<div>
								<img
									className="home-button"
									src="https://images.vexels.com/media/users/3/136189/isolated/preview/8aff3574eabda894d8f7484bf8e81a6e-home-blue-house-icon-by-vexels.png"
									alt="home button"
								/>
							</div>
						</Link>
						<h1>Relax. Breathe. Begin.</h1>
						<p>
							Chose from either the Relaxing Meditation or a Gratitude
							Meditation
						</p>
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
