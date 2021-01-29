import { AppDispatch } from "../../../common/redux/store";
import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import {
  changeModified,
  changeEditMode,
  changeStudentListView,
  saveInterview,
} from "../../redux";
import Interview from "../../../common/types/Interview";
import InterviewForm from "../components/InterviewForm";

const mapStateToProps = (state: RootState) => ({
  editMode: state.interview.editMode,
  interview: state.interview.modifiedInterview,
  courseList: state.interview.courseList,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeEditMode: (editMode: boolean) => {
    dispatch(changeEditMode(editMode));
  },
  changeInterview: (interview: Interview) => {
    dispatch(changeModified(interview));
  },
  changeStudentListView: (studentListView: boolean) => {
    dispatch(changeStudentListView(studentListView));
  },
  save: () => {
    dispatch(changeEditMode(false));
    dispatch(saveInterview());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewForm);
