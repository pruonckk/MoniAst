import { Map } from 'immutable';
import { AUTH_USER, SUCCESS, START, FAIL, LOG_OUT } from '../helpers/constants';

const localStorageToken = localStorage.getItem('token');
const localStorageSip = localStorage.getItem('sip');

const defaultState = new Map({
  isError: false,
  token: localStorageToken,
  sip: localStorageSip,
  isLoading: false,
  isLoggedIn: !!localStorageToken,
  expires: 0,
  errorMessage: '',
  errorCode: 100,

  from: '/'
});

export default function(state = defaultState, action) {
  const { type, response } = action;

  switch (type) {
    case AUTH_USER + SUCCESS:
      return state.withMutations(s =>
        s
          .set('token', response.token)
          .set('sip', response.user.sip)
          .set('isLoggedIn', true)
          .set('isError', false)
          .set('isLoading', false)
      );

    case AUTH_USER + START:
      return state.withMutations(s =>
        s
          .set('isError', false)
          .set('isLoggedIn', false)
          .set('expires', 0)
          .set('isLoading', true)
      );

    case AUTH_USER + FAIL:
      return state.withMutations(s =>
        s
          .set('isLoggedIn', false)
          .set('isError', true)
          .set('expires', 0)
          .set('errorCode', response.errorCode)
          .set('errorMessage', response.errorMessage)
          .set('isLoading', false)
      );

    case LOG_OUT:
      return state.withMutations(s =>
        s
          .set('isLoggedIn', false)
          .set('isError', false)
          .set('token', '')
          .set('sip', '')
          .set('expires', 0)
          .set('isLoading', false)
      );

    default:
      return state;
  }
}
