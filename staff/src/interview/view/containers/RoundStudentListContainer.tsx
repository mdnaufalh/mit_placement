import { AppDispatch } from "../../../common/redux/store";
import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import {
  changeStudentList,
  changeStudentListView,
  promoteStudents,
  demoteStudents,
} from "../../redux";
import RoundStudentList from "../components/RoundStudentList";
import StudentsChecklistItem from "../../../common/types/StudentsChecklistItem";

const mapStateToProps = (state: RootState) => ({
  isOpen: state.interview.studentListView,
  studentList: state.interview.studentList,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeOpen(mode: boolean) {
    dispatch(changeStudentListView(mode));
  },
  promoteStudents() {
    dispatch(promoteStudents());
  },
  demoteStudents() {
    dispatch(demoteStudents());
  },
  changeStudentList(studentList: Array<StudentsChecklistItem>) {
    dispatch(changeStudentList(studentList));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundStudentList);
