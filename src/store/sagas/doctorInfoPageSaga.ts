import { call, put } from "redux-saga/effects";
import axios from "axios";
import { doctorInfoPageActions } from "../actions";

function* getDoctorPage(action: any) {
  const userId = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://api.allodoc.md/users/user/${userId}/?role=doctor`
    );
    yield put(doctorInfoPageActions.success(response.data));
  } catch (error) {
    put(doctorInfoPageActions.error(error));
  }
}
export default getDoctorPage;
