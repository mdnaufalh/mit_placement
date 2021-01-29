import { AppThunk, AppDispatch } from "../../common/redux/store";
import { RootState } from "../../common/redux/reducer";
import InterviewService from "../core/InterviewService";
import { changeInterviewList } from "./slice";
import Interview from "../../common/types/Interview";

export const interviewListEntered = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  const interviewList: Array<Interview> = await InterviewService.fetchAllInterviews();
  console.log(interviewList);
  dispatch(changeInterviewList(interviewList));
};

export const applyInterview = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state: RootState = getState();
  if (state.interview.selected) {
    const interview: Interview = state.interview.selected;
    await InterviewService.applyInterview(interview);
  }
};
