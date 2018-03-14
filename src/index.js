import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import LandingPage from './components/landing-page';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<LandingPage />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
