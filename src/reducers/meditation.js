import * as actions from '../actions/meditation';

const initialState = {
	meditations: [],
	loading: false,
	error: null
};

export default function reducer(state = initialState, action) {
	if (action.type === actions.FETCH_MEDITATION_REQUEST) {
		console.log('REDUCER'); // This looks like it might be left over from some debugging, right?
		return Object.assign({}, state, {
			loading: true
		});
	}
	if (action.type === actions.FETCH_MEDITATION_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			meditations: action.meditation
		});
	}
	if (action.type === actions.FETCH_MEDITATION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	return state;
}
