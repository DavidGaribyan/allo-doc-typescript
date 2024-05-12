import { call, put } from "redux-saga/effects";
import axios from "axios";
import { doctorListActions } from "../actions";

function* getDoctorList(action: any) {
  try {
    const category = action.payload;
    const { data } = yield call(
      axios.get,
      `https://api.allodoc.md/users/get-doctors/?page=1&category=${category}`
    );
    yield put(doctorListActions.success(data.results));
  } catch (error) {
    put(doctorListActions.error(error));
  }
}
export default getDoctorList;
