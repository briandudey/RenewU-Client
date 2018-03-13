import React from 'react';
import { fetchVideos } from '../actions/video';
import { connect } from 'react-redux';
import { Player } from 'video-react';
import PDFReader from 'react-pdf-reader';
import '../../node_modules/video-react/dist/video-react.css';
export class VideoList extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchVideos());
	}

	render() {
		console.log('string', this.props.videos[0]);
		const videos =
			this.props.videos &&
			this.props.videos.map((video, index) => (
				<Player key={index} playsInline src={video} />
			));

		return (
			<div>
				{videos} {/* <ul>
					<Player playsInline src="{videos}" />
				</ul> */}
				{/* <div>
					<PDFReader
						file="http://www.buddhanet.net/pdf_file/words_of_buddha.pdf"
						renderType="canvas"
					/>
				</div> */}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	videos: state.video.videos
});

export default connect(mapStateToProps)(VideoList);
