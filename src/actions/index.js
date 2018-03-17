import fetch from 'whatwg-fetch';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import {
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER,
	PROTECTED_TEST
} from './auth-types';
