import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import videoReducer from './reducers/video';
import readingReducer from './reducers/reading';
import meditationReducer from './reducers/meditation';
import authReducer from './reducer/auth_reducer';
import { reducer as formReducer } from 'redux-form';

const store = createStore(
	combineReducers({
		video: videoReducer,
		reading: readingReducer,
		meditation: meditationReducer,
		auth: authReducer,
		form: formReducer
	}),

	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

export default store;
