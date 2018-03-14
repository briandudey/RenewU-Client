import * as actions from '../actions/reading';

const initialState = {
	readings: [],
	loading: false,
	error: null
};

export default function reducer(state = initialState, action) {
	if (action.type === actions.FETCH_READING_REQUEST) {
		return Object.assign({}, state, {
			loading: true
		});
	}
	if (action.type === actions.FETCH_READING_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			readings: action.reading
		});
	}
	if (action.type === actions.FETCH_READING_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	return state;
}
