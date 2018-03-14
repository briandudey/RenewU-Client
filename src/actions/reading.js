import { API_BASE_URL } from '../config';

export const FETCH_READING_REQUEST = 'FETCH_READING_REQUEST';
export const fetchReadingsRequest = () => ({
	type: FETCH_READING_REQUEST
});

export const FETCH_READING_SUCCESS = 'FETCH_READING_SUCCESS';
export const fetchReadingsSuccess = reading => ({
	type: FETCH_READING_SUCCESS,
	reading
});

export const FETCH_READING_ERROR = 'FETCH_READING_ERROR';
export const fetchReadingsError = error => ({
	type: FETCH_READING_ERROR,
	error
});

export const fetchReadings = () => dispatch => {
	dispatch(fetchReadingsRequest());
	fetch(`${API_BASE_URL}/read`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(readings => {
			console.log('ACTIONS', readings);
			return dispatch(fetchReadingsSuccess(readings));
		})
		.catch(err => {
			dispatch(fetchReadingsError(err));
		});
};
