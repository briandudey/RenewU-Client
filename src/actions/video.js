import { API_BASE_URL } from '../config';

export const FETCH_VIDEO_REQUEST = 'FETCH_VIDEO_REQUEST';
export const fetchVideosRequest = () => ({
	type: FETCH_VIDEO_REQUEST
});

export const FETCH_VIDEO_SUCCESS = 'FETCH_VIDEO_SUCCESS';
export const fetchVideosSuccess = video => ({
	type: FETCH_VIDEO_SUCCESS,
	video
});

export const FETCH_VIDEO_ERROR = 'FETCH_VIDEO_ERROR';
export const fetchVideosError = error => ({
	type: FETCH_VIDEO_ERROR,
	error
});

export const fetchVideos = () => dispatch => {
	dispatch(fetchVideosRequest());
	fetch(`${API_BASE_URL}/watch`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(videos => {
			console.log('ACTIONS', videos);
			dispatch(fetchVideosSuccess(videos));
		})
		.catch(err => {
			dispatch(fetchVideosError(err));
		});
};
