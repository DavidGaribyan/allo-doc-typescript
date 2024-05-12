interface DoctorPageState {
  doctorList: any;
  doctorInfoPage: any;
}

const doctorInfoPageSelector = (state: DoctorPageState) => state.doctorInfoPage;
export { doctorInfoPageSelector };
