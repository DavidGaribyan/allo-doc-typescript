import { doctorInfoPageTypes } from "../types";
interface Data {
  data: any;
  error: any;
  loading: boolean;
}

interface doctorInfoPageAction {
  type: string;
  payload: any;
  error: any;
  loading: boolean;
}

const data: Data = {
  data: null,
  error: null,
  loading: true,
};

export default function doctorInfoPage(
  state = data,
  action: doctorInfoPageAction
) {
  const { type, payload } = action;
  switch (type) {
    case doctorInfoPageTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case doctorInfoPageTypes.SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    case doctorInfoPageTypes.REJECT:
      return {
        ...state,
        data: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
