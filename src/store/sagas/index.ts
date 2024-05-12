import doctorListSaga from './doctorListSaga';
import doctorInfoPageSaga from './doctorInfoPageSaga';
import { takeLatest } from 'redux-saga/effects';
import { doctorListTypes, doctorInfoPageTypes } from '../types';

function* rootSaga() {
  yield takeLatest(doctorListTypes.REQUEST, doctorListSaga);
  yield takeLatest(doctorInfoPageTypes.REQUEST, doctorInfoPageSaga);
}

export default rootSaga;
