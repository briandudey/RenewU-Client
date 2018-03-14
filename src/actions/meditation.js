import { API_BASE_URL } from '../config';

export const FETCH_MEDITATION_REQUEST = 'FETCH_MEDITATION_REQUEST';
export const fetchMeditationsRequest = () => ({
	type: FETCH_MEDITATION_REQUEST
});

export const FETCH_MEDITATION_SUCCESS = 'FETCH_MEDITATION_SUCCESS';
export const fetchMeditationsSuccess = meditation => ({
	type: FETCH_MEDITATION_SUCCESS,
	meditation
});

export const FETCH_MEDITATION_ERROR = 'FETCH_MEDITATION_ERROR';
export const fetchMeditationsError = error => ({
	type: FETCH_MEDITATION_ERROR,
	error
});

export const fetchMeditations = () => dispatch => {
	dispatch(fetchMeditationsRequest());
	fetch(`${API_BASE_URL}/meditation`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(meditations => {
			console.log('ACTIONS', meditations);
			dispatch(fetchMeditationsSuccess(meditations));
		})
		.catch(err => {
			dispatch(fetchMeditationsError(err));
		});
};
