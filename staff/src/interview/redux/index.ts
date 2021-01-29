import Reducer, {
  changeInterviewList,
  changeSelected,
  changeStudentList,
  changeEditMode,
  changeModified,
  changeRound,
  changeStudentListView,
  changeCourseList,
} from "./slice";
import {
  roundStudentListEntered,
  interviewListEntered,
  promoteStudents,
  demoteStudents,
  saveInterview,
} from "./thunks";

export default Reducer;
export {
  changeStudentList,
  saveInterview,
  promoteStudents,
  interviewListEntered,
  demoteStudents,
  roundStudentListEntered,
  changeInterviewList,
  changeSelected,
  changeStudentListView,
  changeRound,
  changeModified,
  changeEditMode,
  changeCourseList,
};
