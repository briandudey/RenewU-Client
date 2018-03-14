import React from 'react';
import '../index.css';


export class VideoPlayer extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		video = document.getElementById("video"),
		timeStarted = -1,
		timePLayed = 0,
		duration = 0
	};
}

componentDidMount() {
	if (video.readyState > 0) {
		getDuration.call(video);
		}	else {
		//If metadata not loaded, use event to get it
	
		video.addEventListener('loadedmetadata', getDuration);
	}
	timeStarted = new Date().getTime() / 1000;
}
	
	
		// remember time user started the video
		videoStoppedPlaying(event) {
			// Start time less then zero means stop event was fired vidout start event
			if (timeStarted > 0) {
				let playedFor = new Date().getTime() / 1000 - timeStarted;
				timeStarted = -1;
				// add the new ammount of seconds played
				timePlayed += playedFor;
			}
			document.getElementById('played').innerHTML = Math.round(timePlayed) + '';
			// Count as complete only if end of video was reached
			if (timePlayed >= duration && event.type == 'ended') {
				document.getElementById('status').className = 'complete';
			}
		}

		getDuration() {
			duration = video.duration;
			document
				.getElementById('duration')
				.appendChild(new Text(Math.round(duration) + ''));
			console.log('Duration: ', duration);
		}

		video.addEventListener('play', videoStartedPlaying);
		video.addEventListener('playing', videoStartedPlaying);

		video.addEventListener('ended', videoStoppedPlaying);
		video.addEventListener('pause', videoStoppedPlaying);
	}
	