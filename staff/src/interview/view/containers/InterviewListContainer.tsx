import { AppDispatch } from "../../../common/redux/store";
import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import InterviewList from "../components/InterviewList";
import Interview from "../../../common/types/Interview";
import {
  changeEditMode,
  changeModified,
  changeSelected,
  interviewListEntered,
} from "../../redux";

const mapStateToProps = (state: RootState) => ({
  interviewList: state.interview.interviewList,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  interviewListEntered() {
    dispatch(interviewListEntered());
  },
  changeEditMode: (editMode: boolean) => {
    dispatch(changeEditMode(editMode));
  },
  selectInterview: (interview: Interview) => {
    dispatch(changeSelected(interview));
    dispatch(changeModified(interview));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewList);
