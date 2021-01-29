import Interview from "../../common/types/Interview";
import StudentsChecklistItem from "../../common/types/StudentsChecklistItem";
import Course from "../../common/types/Course";

interface InitialState {
  interviewList: Array<Interview>;
  selected: Interview | null;
  selectedRound: number | null;
  studentList: Array<StudentsChecklistItem>;
  modifiedInterview: Interview | null;
  editMode: boolean;
  studentListView: boolean;
  courseList: Array<Course>;
}

const interview: Interview = {
  ...new Interview(),
  company: "Arcesium",
  jobTitle: "SDE",
  location: "HYD",
  ctc: 21.5,
};

const initialState: InitialState = {
  interviewList: [],
  selected: null,
  studentList: [],
  selectedRound: null,
  modifiedInterview: null,
  editMode: false,
  studentListView: false,
  courseList: [],
};

export default initialState;
