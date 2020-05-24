import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import tlnt from '../modules/tlnt';
const stats = tlnt;
let counter0 = 0;


function* fetchUser(action) {

	const counter = counter0++;

	try {
		const user = yield stats.getStats();
		yield put({ type: "TELNET_REQUEST_SUCCEED", data: { ...user, ...{ counter: counter, date: new Date() } } });
	} catch (e) {
		yield put({ type: "TELNET_REQUEST_FAILED", data: { raw: e, ...{ counter: counter, date: new Date() } } });
	}
}


export function* mySaga() {

	yield takeEvery("TELNET_REQUEST", fetchUser);
}
