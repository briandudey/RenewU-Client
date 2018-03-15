import React from 'react';
// import { fetchReadings } from '../actions/reading';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { PDFReader } from 'react-pdf-reader';

// import VideoIndex from './video-index';
import '../index.css';
// import 'react-pdf-reader/dist/TextLayerBuilder.css';
// import 'react-pdf-reader/dist/PdfReader.css';
// import { API_BASE_URL } from '../config';

export default class LandingPage extends React.Component {
	// componentDidMount
	// 	this.props.dispatch(fetchVideos());
	// this.props.dispatch(fetchReadings());

	render() {
		// console.log(this.props.readings);
		// const readings =
		// 	this.props.readings &&
		// 	this.props.readings.map((reading, index) => (
		// 		<PDFReader key={index} file={reading} renderType="canvas" />

		return (
			<div>
				<div>
					<div className="container boxA">Read </div>
					<Link to="/watch">
						<div className="container boxB">
							<img
								className="watch"
								src="https://tapoos.com/wp-content/uploads/2017/09/c-users-admin-desktop-ahsan-2116-2-jpg.jpeg"
							/>
							<h4>WATCH</h4>
						</div>
					</Link>

					<div className="container boxC">Your Progress </div>
					<div className="container boxD">Create </div>
					<Link to="/meditation">
						<div className="container boxE">
							<img
								className="meditate"
								src="http://static.oprah.com/2017/11/201711-spiritual-definitions-meditate-949x534.jpg"
							/>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}
