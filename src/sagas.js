import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_USER_DATA, receiveUserData, receiveDashboardUserData, REQUEST_DASHBOARDUSER_DATA, REQUEST_ALLUSER_DATA, receiveAllUserData } from "./actions";

import { fetchData, fetchDashboardData } from "./api";

function* getUserData(action) {

    try {
        // do api call
        const data = yield call(fetchData);
        const final = data.filter((data) => (data.name === action.user && data.password === action.pwd))[0]
        if (final !== undefined) {
            localStorage.setItem('user', JSON.stringify(final))
            yield put(receiveUserData(final));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getDashboardUserData(action) {

    try {
        // do api call
        const data = yield call(fetchDashboardData);
        // const final = data.filter((data) => (data.name === action.user))
            yield put(receiveDashboardUserData(data));
        
    } catch (e) {
        console.log(e);
    }
}

function* getAllUserData() {
    try {
        // do api call
        const data = yield call(fetchData);
        yield put(receiveAllUserData(data));

    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_DASHBOARDUSER_DATA, getDashboardUserData);
    yield takeLatest(REQUEST_USER_DATA, getUserData);
    yield takeLatest(REQUEST_ALLUSER_DATA, getAllUserData);
}