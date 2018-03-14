import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import videoReducer from './reducers/video';
import readingReducer from './reducers/reading';
import meditationReducer from './reducers/meditation';
const store = createStore(
	combineReducers({
		video: videoReducer,
		reading: readingReducer,
		meditation: meditationReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

export default store;
