import Student from "../../common/types/Student";

interface InitialState {
  editMode: boolean;
  profile: Student | null;
  modifiedProfile: Student | null;
}

const student: Student = {
  id: 1,
  registerNumber: "2017503501",
  name: "Ajay AT",
  college: "Madras Institute of Technology",
  course: "B.E. Computer Science and Engineering",
  sslcPercentage: 100,
  hscPercentage: 100,
  ugCgpa: 9.08,
  pgCgpa: 10,
  currentArrears: 0,
  historyOfArrears: 0,
  resume: null,
  placedCount: 1,
};

const initialState: InitialState = {
  editMode: false,
  profile: student,
  modifiedProfile: null,
};

export default initialState;
