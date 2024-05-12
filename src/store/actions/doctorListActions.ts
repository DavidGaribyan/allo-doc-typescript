import { doctorListTypes } from "../types";
import {
  doctorListReject,
  doctorListRequest,
  doctorListSuccess,
} from "../types/doctorListTypes";

const get = (category: string): doctorListRequest => {
  return {
    type: doctorListTypes.REQUEST,
    payload: category,
  };
};
const success = (data: any): doctorListSuccess => {
  return {
    type: doctorListTypes.SUCCESS,
    payload: data,
  };
};
const error = (error: any): doctorListReject => {
  return {
    type: doctorListTypes.REJECT,
    payload: error,
  };
};

export { get, success, error };
