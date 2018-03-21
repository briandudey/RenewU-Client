import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import videoReducer from './reducers/video';
import readingReducer from './reducers/reading';
import meditationReducer from './reducers/meditation';
import authReducer from './reducers/auth_reducer';
import { reducer as formReducer } from 'redux-form';
import userWatchIDReducer from './reducers/user-watch-id';
import { loadAuthToken } from './local-storage';
import protectedDataReducer from './reducers/protected-data';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
	combineReducers({
		video: videoReducer,
		userWatchID: userWatchIDReducer,
		reading: readingReducer,
		meditation: meditationReducer,
		auth: authReducer,
		form: formReducer,
		protectedData: protectedDataReducer
	}),
	applyMiddleware(thunk)
);
const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
applyMiddleware(thunk);

export default store;
