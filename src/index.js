import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import VideoList from './components/video-list';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<VideoList />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
