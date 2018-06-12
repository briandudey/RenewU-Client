/*
 * You might want to take a look at `redux-actions`
 *
 * It takes a lot of the boiler-plate out of some of this code.
 * In addition, it makes it easier to combine your reducers and your actions.
 *
 * I'm going to implement this with `redux-actions` just as an example... there's nothing wrong with doing
 * it this way - you should decide which you prefer.
 *
 * You would then put your `login` methods and such into a stand-alone file which takes a reference to a Store... or
 * use some other approach
 */

import {handleActions, createActions} from 'redux-actions';

const actions = createActions(
    {
        SET_AUTH_TOKEN: authToken => ({authToken}),
        AUTH_SUCCESS: currentUser => ({currentUser}),
        AUTH_ERROR: error => ({error}),
    },
    'AUTH_REQUEST',
    'CLEAR_AUTH'
);
const reducers = handleActions(
    {
        [actions.setAuthToken]: (state, {payload: {authToken}}) => ({
            ...state,
            authToken,
        }),
        [actions.clearAuth]: (state) => {
            return {
                ...state,
                authToken: null,
                currentUser: null
            };
        },
        [actions.authRequest]: (state) => {
            return {
                ...state,
                loading: true,
                error: null
            };
        },
        [actions.authSuccess]: (state, {payload: {currentUser}}) => ({
            ...state,
            loading: false,
            currentUser
        }),
        [actions.authError]: (state, {payload: {error}}) => ({
            ...state,
            loading: false,
            error
        })
    }
);

export {actions, reducers};

