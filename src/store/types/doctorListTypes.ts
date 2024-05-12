const REQUEST = "DOCTOR_LIST@REQUEST";
export interface doctorListRequest {
  type: typeof REQUEST;
  payload: string;
}
const SUCCESS = "DOCTOR_LIST@SUCCESS";
export interface doctorListSuccess {
  type: typeof SUCCESS;
  payload: any;
}
const REJECT = "DOCTORL_LIST@REJECT";
export interface doctorListReject {
  type: typeof REJECT;
  payload: any;
}
export { REQUEST, SUCCESS, REJECT };
export type doctorListAction =
  | doctorListRequest
  | doctorListSuccess
  | doctorListReject;
