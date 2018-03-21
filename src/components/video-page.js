import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/video';
import VideoIndex from './video-index';
import './video-page.css';

export class VideoPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchVideos());
	}
	render() {
		return (
			<div className="main-contain">
				<div className="video-c card">
					<VideoIndex videos={this.props.videos} />
					{/* <button>Watched</button> */}
				</div>
				<div className="cards">
					<img
						className="buddha-image"
						src="https://i.pinimg.com/150x150/af/78/77/af7877a7fc2a03ca4b840d7b95cd295d.jpg"
						alt="colorful painting of the Buddha"
					/>
					<div className="card">
						<h1>First Video</h1>
					</div>
				</div>
				<div className="cards">
					<img
						className="buddha-image"
						src="http://workbyholiday.com/wp-content/uploads/3d-wallpaper-buddha-3d-wallpaper-at-rs-50-square-feet-3d-wallpaper-id-150x150.jpg"
						alt="green painting of the Buddha"
					/>
					<div className="card">
						<h1>Second Video</h1>
					</div>
				</div>
				<div className="cards">
					<img
						className="buddha-image"
						src="http://www.gbbicgrnoida.ac.in/wp-content/uploads/2016/03/Gautam-image-150x150.jpg"
						alt="blue painting of the Buddha"
					/>
					<div className="card">
						<h1>Third Video</h1>
					</div>
				</div>
				<div className="cards">
					<img
						className="buddha-image"
						src="https://scontent-yyz1-1.cdninstagram.com/vp/3b0abcdd9d0cb2655d9ae5aebab0f870/5B29B7AC/t51.2885-19/s150x150/27880837_201244140611702_7173778566205669376_n.jpg"
						alt="yellow painting of the Buddha"
					/>
					<div className="card">
						<h1>Fourth Video</h1>
					</div>
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
