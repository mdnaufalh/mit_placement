import { AppDispatch } from "../../../common/redux/store";
import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import InterviewList from "../components/InterviewList";
import Interview from "../../../common/types/Interview";
import { changeSelected, interviewListEntered } from "../../redux";
import InterviewService from "../../core/InterviewService";

const mapStateToProps = (state: RootState) => ({
  interviewList: state.interview.interviewList,
  student: state.profile.profile,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  interviewListEntered() {
    dispatch(interviewListEntered());
  },
  selectInterview: (interview: Interview) => {
    dispatch(changeSelected(interview));
  },
  applyInterview: async (interview: Interview) => {
    await InterviewService.applyInterview(interview);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewList);
