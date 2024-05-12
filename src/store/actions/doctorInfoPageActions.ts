import { doctorInfoPageTypes } from "../types";
import {
  doctorInfoPageReject,
  doctorInfoPageRequest,
  doctorInfoPageSuccess,
} from "../types/doctorInfoPageTypes";

const get = (id: string): doctorInfoPageRequest => {
  return {
    type: doctorInfoPageTypes.REQUEST,
    payload: id,
  };
};

const success = (data: any): doctorInfoPageSuccess => {
  return {
    type: doctorInfoPageTypes.SUCCESS,
    payload: data,
  };
};
const error = (error: any): doctorInfoPageReject => {
  return {
    type: doctorInfoPageTypes.REJECT,
    payload: { error },
  };
};

export { get, success, error };
