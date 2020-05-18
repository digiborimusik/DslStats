import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import tlnt from '../modules/tlnt';
const stats = tlnt;
let counter0 = 0;

function* fetchUser(action) {
  try {
    const counter = counter0++;
    const user = yield stats.getStats();
    yield put({ type: "TELNET_REQUEST_SUCCEED", data: { ...user, ...{ counter: counter } } });
  } catch (e) {
    yield put({ type: "TELNET_REQUEST_FAILED", data: 'asd' });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {

  yield takeEvery("TELNET_REQUEST", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default mySaga;