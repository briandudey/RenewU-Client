import * as actions from '../actions/video';

const initialState = {
	videos: [],
	loading: false,
	error: null
};

export default function reducer(state = initialState, action) {
	if (action.type === actions.FETCH_VIDEO_REQUEST) {
		console.log('REDUCER');
		return Object.assign({}, state, {
			loading: true
		});
	}
	if (action.type === actions.FETCH_VIDEO_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			videos: action.video
		});
	}
	if (action.type === actions.FETCH_VIDEO_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	return state;
}
