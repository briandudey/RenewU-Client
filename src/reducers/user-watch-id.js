import * as actions from '../actions/user-watch-id';
import { FETCH_POST_REQUEST } from '../actions/video';

const initialState = {
	userWatchID: 0
};

export default function reducer(state = initialState, action) {
	console.log(action.type);
	if (action.type === actions.FETCH_USER_WATCH_ID_SUCCESS) {
		return Object.assign({}, state, {
			userWatchID: action.userWatchID
		});
	}
	if (action.type === FETCH_POST_REQUEST) {
		return Object.assign({}, state, {
			userWatchID: state.userWatchID + 1
		});
	}
	if (action.type === actions.FETCH_USER_WATCH_ID_ERROR) {
		console.log(action.error);
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}
