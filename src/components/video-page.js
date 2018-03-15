import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/video';
import VideoIndex from './video-index';
import '../index.css';

export class VideoPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchVideos());
	}
	render() {
		return (
			<div>
				<h1>Meditation Videos</h1>
				<div>
					<VideoIndex videos={this.props.videos} />
					<button>Watched</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	videos: state.video.videos
});

export default connect(mapStateToProps)(VideoPage);

// onClick={e => {}}
