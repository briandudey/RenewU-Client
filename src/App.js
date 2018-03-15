import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './components/landing-page';
import VideoPage from './components/video-page';
import MeditationPage from './components/meditation-page';

import { API_BASE_URL } from './config';
import './App.css';

export default function App(props) {
	return (
		<Router>
			<div className="app">
				<header>
					<h1>
						<Link to="/">What's This?</Link>
					</h1>
				</header>
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route path="/watch" component={VideoPage} />
					<Route path="/meditation" component={MeditationPage} />
				</main>
			</div>
		</Router>
	);
}
