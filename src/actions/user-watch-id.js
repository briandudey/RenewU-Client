import { API_BASE_URL } from '../config';

export const FETCH_USER_WATCH_ID_SUCCESS = 'FETCH_USER_WATCH_ID_SUCCESS';
export const fetchUserWatchIDSuccess = userWatchID => ({
	type: FETCH_USER_WATCH_ID_SUCCESS,
	userWatchID
});

export const FETCH_USER_WATCH_ID_ERROR = 'FETCH_USER_WATCH_ID_ERROR';
export const fetchUserWatchIDError = error => ({
	type: FETCH_USER_WATCH_ID_ERROR,
	error
});

export const fetchUserWatchID = userWatchID => (dispatch, getState) => {
	const jwt = getState().auth.authToken;
	fetch(`${API_BASE_URL}/userwatchID`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${jwt}`
		}
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(({ userWatchID }) => {
			console.log(userWatchID);
			dispatch(fetchUserWatchIDSuccess(userWatchID));
		})
		.catch(err => {
			dispatch(fetchUserWatchIDError(err));
		});
};
