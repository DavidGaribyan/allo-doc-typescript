const REQUEST = "DOCTOR_INFO_PAGE/REQUEST";
export interface doctorInfoPageRequest {
  type: typeof REQUEST;
  payload: string;
}
const SUCCESS = "DOCTOR_INFO_PAGE/SUCCESS";
export interface doctorInfoPageSuccess {
  type: typeof SUCCESS;
  payload: any;
}
const REJECT = "DOCTOR_INFO_PAGE/REJECT";
export interface doctorInfoPageReject {
  type: typeof REJECT;
  payload: any;
}
export { REQUEST, SUCCESS, REJECT };
export type doctorInfoPageTS =
  | doctorInfoPageRequest
  | doctorInfoPageSuccess
  | doctorInfoPageReject;
