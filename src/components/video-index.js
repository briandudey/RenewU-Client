import React from 'react';
import { fetchPost } from '../actions/video';
import { connect } from 'react-redux';
import { fetchUserWatchID } from '../actions/user-watch-id';

export class VideoIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			src: this.props.videos[0]
		};
	}
	componentDidMount() {
		this.props.dispatch(fetchUserWatchID());
	}

	render() {
		console.log(this.props.userWatchID);
		return (
			<div>
				<video
					className="video-box"
					onEnded={e => {
						if (this.state.index < this.props.videos.length - 1) {
							let nextIndex = this.state.index + 1;
							this.setState({
								index: nextIndex,
								src: this.props.videos[nextIndex]
							});
							this.props.dispatch(fetchPost(nextIndex));
						}
					}}
					src={this.props.videos[this.props.userWatchID]}
					controls
					// this.state.index
					// autoplay="false"
					playsinline
					crossorigin
				/>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	userWatchID: state.userWatchID.userWatchID
});

export default connect(mapStateToProps)(VideoIndex);
