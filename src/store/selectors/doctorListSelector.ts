interface DoctorListState {
  doctorList: any;
  doctorInfoPage: any;
}

const doctorListSelector = (state: DoctorListState) => state.doctorList;
export { doctorListSelector };
