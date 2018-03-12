import React from 'react';
import { fetchVideos } from '../actions/video';
import { connect } from 'react-redux';
import { Player } from 'video-react';

export class VideoList extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchVideos());
	}

	render() {
		console.log('string', this.props.videos);
		const videos =
			this.props.videos &&
			this.props.videos.map((video, index) => <div key={index}>{video}</div>);

		return (
			<div>
				<Player playsInline src="{videos}" />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	videos: state.video.videos
});

export default connect(mapStateToProps)(VideoList);
