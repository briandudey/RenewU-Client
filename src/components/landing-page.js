import React, { Component } from 'react';
import { fetchVideos } from '../actions/video';
import { fetchReadings } from '../actions/reading';
import { fetchMeditations } from '../actions/meditation';
import { connect } from 'react-redux';
import { Player } from 'video-react';
import { PDFReader } from 'react-pdf-reader';
import MusicPlayer from 'react-responsive-music-player';
import '../index.css';
import '../../node_modules/video-react/dist/video-react.css';
import 'react-pdf-reader/dist/TextLayerBuilder.css';
import 'react-pdf-reader/dist/PdfReader.css';

export class LandingPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchVideos());
		this.props.dispatch(fetchReadings());
		this.props.dispatch(fetchMeditations());
	}

	render() {
		// console.log(this.props.readings);
		// const readings =
		// 	this.props.readings &&
		// 	this.props.readings.map((reading, index) => (
		// 		<PDFReader key={index} file={reading} renderType="canvas" />
		// 	));
		let video =
			this.props.videos &&
			this.props.videos.map((video, index) => (
				<div>
					<video width="200" controls="true" poster="" id="video">
						<source type="video/mp4" src="{video}" />
					</video>

					<div id="status" className="incomplete">
						<span>Play status: </span>
						<span className="status complete">COMPLETE</span>
						<span className="status incomplete">INCOMPLETE</span>
						<br />
					</div>
					<div>
						<span id="played">0</span> seconds out of
						<span id="duration" /> seconds
					</div>
				</div>
			));

		const playlist = this.props.meditations;
		const player =
			this.props.meditations && this.props.meditations.length ? (
				<MusicPlayer playlist={playlist} />
			) : null;
		return (
			<div>
				<div>
					<div className="container boxA">Read </div>
					<div className="container boxB">Watch </div>
					<div className="container boxC">Your Progress </div>
					<div className="container boxD">Create </div>
					<div className="container boxE">Meditate </div>
				</div>
				<div>{player}</div>
				<div>
					<video width="200" controls="true" poster="" id="video">
						<source
							type="video/mp4"
							src="https://ia800300.us.archive.org/13/items/meditation_techniques/meditation_techniques.mp4"
						/>
					</video>

					<div id="status" className="incomplete">
						<span>Play status: </span>
						<span className="status complete">COMPLETE</span>
						<span className="status incomplete">INCOMPLETE</span>
						<br />
					</div>
					<div>
						<span id="played">0</span> seconds out of
						<span id="duration" /> seconds
					</div>
					{/* <div>{videos}</div> */}
					{/* <div>{readings}</div> */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	videos: state.video.videos,
	readings: state.reading.readings,
	meditations: state.meditation.meditations
});

export default connect(mapStateToProps)(LandingPage);
