import React from 'react';

export default class VideoIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			src: this.props.videos[0]
		};
	}

	render() {
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
						}
					}}
					src={this.props.videos[this.state.index]}
					controls
					// autoplay="false"
					playsinline
					crossorigin
				/>
			</div>
		);
	}
}
