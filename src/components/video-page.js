import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
				<div className="header">
					<Link to="/LandingPage">
						<img
							className="home-button"
							src="https://images.vexels.com/media/users/3/136189/isolated/preview/8aff3574eabda894d8f7484bf8e81a6e-home-blue-house-icon-by-vexels.png"
							alt="home-button"
						/>
					</Link>
					<div>
						<h1>Breathe. Watch. Explore.</h1>
						<p>
							Your progress is automatically tracked. Badges are earned for each
							video you complete.
						</p>
					</div>
				</div>
				<div className="video-c card">
					<VideoIndex videos={this.props.videos} />
					{/* <button>Watched</button> */}
				</div>
				{this.props.userWatchID === 0 && (
					<div className="cards">
						<img
							className="eightfold"
							src="https://assets.rbl.ms/12781515/980x.png"
							alt="colorful drawing of Buddhist philosophy of the eight fold path"
						/>
						<div className="card">
							<h2>Welcome!</h2>
							<h6>
								Start Your First Video To Begin Your Exploration of Meditation
							</h6>
						</div>
					</div>
				)}
				{this.props.userWatchID === 1 && (
					<div className="cards">
						<img
							className="buddha-image"
							src="https://i.pinimg.com/150x150/af/78/77/af7877a7fc2a03ca4b840d7b95cd295d.jpg"
							alt="colorful painting of the Buddha rendered after completing first video"
						/>
						<div className="card">
							<h2>Brilliant! First Video Complete</h2>
							<h6>
								You have begun a magnificent journey. Take a moment to
								congratulate yourself on starting something new.
							</h6>
						</div>
					</div>
				)}
				{this.props.userWatchID === 2 && (
					<div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://workbyholiday.com/wp-content/uploads/3d-wallpaper-buddha-3d-wallpaper-at-rs-50-square-feet-3d-wallpaper-id-150x150.jpg"
								alt="green painting of the Buddha rendered after completing second video"
							/>
							<div className="card">
								<h2>Splendid! Second Video Complete</h2>
								<h6>You are showing great commitment to learning.</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://i.pinimg.com/150x150/af/78/77/af7877a7fc2a03ca4b840d7b95cd295d.jpg"
								alt="colorful painting of the Buddha rendered after completing first video"
							/>
							<div className="card">
								<h2>Brilliant! First Video Complete</h2>
								<h4>
									You have begun a magnificent journey. Take a moment to
									congratulate yourself on starting something new.
								</h4>
							</div>
						</div>
					</div>
				)}
				{this.props.userWatchID === 3 && (
					<div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://s3.amazonaws.com/fineartimages.dailypaintworks.com/large_thumb_2c150729-f890-47b6-a87f-195a71d7556a.jpg?imageVersion=1"
								alt="purple painting of the Buddha rendered after completing third video"
							/>
							<div className="card">
								<h2>Fantastic! Third Video Complete</h2>
								<h4>
									Half way there! Go practice what you have learned on the
									meditation page.
								</h4>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://workbyholiday.com/wp-content/uploads/3d-wallpaper-buddha-3d-wallpaper-at-rs-50-square-feet-3d-wallpaper-id-150x150.jpg"
								alt="green painting of the Buddha rendered after completing second video"
							/>
							<div className="card">
								<h2>Splendid! Second Video Complete</h2>
								<h6>You are showing great commitment to learning.</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://i.pinimg.com/150x150/af/78/77/af7877a7fc2a03ca4b840d7b95cd295d.jpg"
								alt="colorful painting of the Buddha rendered after completing first video"
							/>
							<div className="card">
								<h2>Brilliant! First Video Complete</h2>
								<h6>
									You have begun a magnificent journey. Take a moment to
									congratulate yourself on starting something new.
								</h6>
							</div>
						</div>
					</div>
				)}
				{this.props.userWatchID === 4 && (
					<div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://scontent-yyz1-1.cdninstagram.com/vp/3b0abcdd9d0cb2655d9ae5aebab0f870/5B29B7AC/t51.2885-19/s150x150/27880837_201244140611702_7173778566205669376_n.jpg"
								alt="yellow painting of the Buddha rendered after completing fourth video"
							/>
							<div className="card">
								<h2>Wonderful! Fourth Video Complete</h2>
								<h6>
									So close to the end. Take a moment to reflect on what you have
									learned.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://s3.amazonaws.com/fineartimages.dailypaintworks.com/large_thumb_2c150729-f890-47b6-a87f-195a71d7556a.jpg?imageVersion=1"
								alt="purple painting of the Buddha rendered after completing third video"
							/>
							<div className="card">
								<h2>Fantastic! Third Video Complete</h2>
								<h6>
									Half way there! Go practice what you have learned on the
									meditation page.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://workbyholiday.com/wp-content/uploads/3d-wallpaper-buddha-3d-wallpaper-at-rs-50-square-feet-3d-wallpaper-id-150x150.jpg"
								alt="green painting of the Buddha rendered after completing second video"
							/>
							<div className="card">
								<h2>Splendid! Second Video Complete</h2>
								<h6>You are showing great commitment to learning.</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://i.pinimg.com/150x150/af/78/77/af7877a7fc2a03ca4b840d7b95cd295d.jpg"
								alt="colorful painting of the Buddha rendered after completing first video"
							/>
							<div className="card">
								<h2>Brilliant! First Video Complete</h2>
								<h6>
									You have begun a magnificent journey. Take a moment to
									congratulate yourself on starting something new.
								</h6>
							</div>
						</div>
					</div>
				)}
				{this.props.userWatchID === 5 && (
					<div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://cookxl.info/wp-content/uploads/2017/10/buddha-paintings-saatchi-art-lord-buddha-painting-chitra-singh-ideas-150x150.jpg"
								alt="colorful painting of the Buddha rendered after completing first video"
							/>
							<div className="card">
								<h2>Divine! Fifth Video Complete</h2>
								<h6>
									You are nearing the end of your lessons. Only one more video
									to go.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://scontent-yyz1-1.cdninstagram.com/vp/3b0abcdd9d0cb2655d9ae5aebab0f870/5B29B7AC/t51.2885-19/s150x150/27880837_201244140611702_7173778566205669376_n.jpg"
								alt="yellow painting of the Buddha rendered after completing fourth video"
							/>
							<div className="card">
								<h2>Wonderful! Fourth Video Complete</h2>
								<h6>
									So close to the end. Take a moment to reflect on what you have
									learned.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://s3.amazonaws.com/fineartimages.dailypaintworks.com/large_thumb_2c150729-f890-47b6-a87f-195a71d7556a.jpg?imageVersion=1"
								alt="purple painting of the Buddha rendered after completing third video"
							/>
							<div className="card">
								<h2>Fantastic! Third Video Complete</h2>
								<h6>
									Half way there! Go practice what you have learned on the
									meditation page.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://workbyholiday.com/wp-content/uploads/3d-wallpaper-buddha-3d-wallpaper-at-rs-50-square-feet-3d-wallpaper-id-150x150.jpg"
								alt="green painting of the Buddha rendered after completing second video"
							/>
							<div className="card">
								<h2>Splendid! Second Video Complete</h2>
								<h6>You are showing great commitment to learning.</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://i.pinimg.com/150x150/af/78/77/af7877a7fc2a03ca4b840d7b95cd295d.jpg"
								alt="colorful painting of the Buddha rendered after completing first video"
							/>
							<div className="card">
								<h2>Brilliant! First Video Complete</h2>
								<h6>
									You have begun a magnificent journey. Take a moment to
									congratulate yourself on starting something new.
								</h6>
							</div>
						</div>
					</div>
				)}
				{this.props.userWatchID === 6 && (
					<div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://diarioveaonline.com/wp-content/uploads/2018/01/amazing-buddha-wallpaper-for-desktop-14-150x150.jpg"
								alt="colorful painting of the Buddha rendered after completing all of the videos"
							/>
							<div className="card">
								<h2>Congratulations! Sixth Video Complete</h2>
								<h6>
									you have completed the meditation course. Now, go to the
									meditation page to practice all you have learned.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://cookxl.info/wp-content/uploads/2017/10/buddha-paintings-saatchi-art-lord-buddha-painting-chitra-singh-ideas-150x150.jpg"
								alt="colorful painting of the Buddha rendered after completing first video"
							/>
							<div className="card">
								<h2>Divine! Fifth Video Complete</h2>
								<h6>
									You are nearing the end of your lessons. Only one more video
									to go.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://scontent-yyz1-1.cdninstagram.com/vp/3b0abcdd9d0cb2655d9ae5aebab0f870/5B29B7AC/t51.2885-19/s150x150/27880837_201244140611702_7173778566205669376_n.jpg"
								alt="yellow painting of the Buddha rendered after completing fourth video"
							/>
							<div className="card">
								<h2>Wonderful! Fourth Video Complete</h2>
								<h6>
									So close to the end. Take a moment to reflect on what you have
									learned.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://s3.amazonaws.com/fineartimages.dailypaintworks.com/large_thumb_2c150729-f890-47b6-a87f-195a71d7556a.jpg?imageVersion=1"
								alt="purple painting of the Buddha rendered after completing third video"
							/>
							<div className="card">
								<h2>Fantastic! Third Video Complete</h2>
								<h6>
									Half way there! Go practice what you have learned on the
									meditation page.
								</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="http://workbyholiday.com/wp-content/uploads/3d-wallpaper-buddha-3d-wallpaper-at-rs-50-square-feet-3d-wallpaper-id-150x150.jpg"
								alt="green painting of the Buddha rendered after completing second video"
							/>
							<div className="card">
								<h2>Splendid! Second Video Complete</h2>
								<h6>You are showing great commitment to learning.</h6>
							</div>
						</div>
						<div className="cards">
							<img
								className="buddha-image"
								src="https://i.pinimg.com/150x150/af/78/77/af7877a7fc2a03ca4b840d7b95cd295d.jpg"
								alt="colorful painting of the Buddha rendered after completing first video"
							/>
							<div className="card">
								<h2>Brilliant! First Video Complete</h2>
								<h6>
									You have begun a magnificent journey. Take a moment to
									congratulate yourself on starting something new.
								</h6>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
const mapStateToProps = state => ({
	videos: state.video.videos,
	userWatchID: state.userWatchID.userWatchID
});

export default connect(mapStateToProps)(VideoPage);

// onClick={e => {}}
