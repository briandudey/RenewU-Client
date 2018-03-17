import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

//Auth
import NotFoundPage from './components/pages/not-found-page';
import HomePage from './components/pages/home-page';
import Register from './components/auth/register';
import Login from './components/dashboard';
import RequireAuth from './components/auth/require-auth';

//Pages
import LandingPage from './components/landing-page';
import VideoPage from './components/video-page';
import MeditatePage from './components/meditation-page';

export default (
	<Route path="/App" component={App}>
		<IndexRoute component={LandingPage} />
		<Route exact path="/register" component={Register} />
		<Route path="/login" component={Login} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/landingpage" component={LandingPage} />
		<Route path="/watch" component={VideoPage} />
		<Route path="/meditation" component={MeditationPage} />

		<Route path="*" component={NotFoundPage} />
	</Route>
);
