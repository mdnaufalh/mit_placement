import { AppDispatch } from "../../../common/redux/store";
import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import {
  changeModified,
  changeRound,
  changeStudentListView,
  roundStudentListEntered,
} from "../../redux";
import Interview from "../../../common/types/Interview";
import RoundList from "../components/RoundList";

const mapStateToProps = (state: RootState) => ({
  interview: state.interview.modifiedInterview,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeInterview(interview: Interview) {
    dispatch(changeModified(interview));
  },
  changeRoundNumber(roundNumber: number) {
    dispatch(changeRound(roundNumber));
  },
  roundStudentListEntered() {
    dispatch(roundStudentListEntered());
  },
  changeRoundListMode(mode: boolean) {
    dispatch(changeStudentListView(mode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundList);
