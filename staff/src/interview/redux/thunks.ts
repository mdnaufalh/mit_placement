import { AppThunk, AppDispatch } from "../../common/redux/store";
import { RootState } from "../../common/redux/reducer";
import InterviewService from "../core/InterviewService";
import {
  changeCourseList,
  changeInterviewList,
  changeStudentList,
  changeStudentListView,
} from "./slice";
import Interview from "../../common/types/Interview";
import StudentsChecklistItem from "../../common/types/StudentsChecklistItem";
import Course from "../../common/types/Course";

export const interviewListEntered = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  const interviewList: Array<Interview> = await InterviewService.fetchAllInterviews();
  dispatch(changeInterviewList(interviewList));
  const courseList: Array<Course> = await InterviewService.fetchAllCourses();
  dispatch(changeCourseList(courseList));
};

export const saveInterview = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state: RootState = getState();
  if (state.interview.modifiedInterview) {
    const interview: Interview = state.interview.modifiedInterview;
    await InterviewService.saveInterview(interview);
  }
};

export const roundStudentListEntered = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state: RootState = getState();
  if (
    state.interview.modifiedInterview &&
    state.interview.modifiedInterview.id &&
    state.interview.selectedRound
  ) {
    const studentList: Array<StudentsChecklistItem> = await InterviewService.fetchRoundList(
      state.interview.modifiedInterview.id,
      state.interview.selectedRound
    );
    dispatch(changeStudentList(studentList));
  }
};

export const demoteStudents = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state: RootState = getState();
  const studentList: Array<number> = state.interview.studentList
    .filter((student: StudentsChecklistItem) => student.checked)
    .map((student: StudentsChecklistItem) => student.id);
  if (
    state.interview.modifiedInterview &&
    state.interview.modifiedInterview.id
  ) {
    await InterviewService.demoteStudents(
      state.interview.modifiedInterview.id,
      studentList
    );
    dispatch(changeStudentListView(false));
  }
};

export const promoteStudents = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state: RootState = getState();
  const studentList: Array<number> = state.interview.studentList
    .filter((student: StudentsChecklistItem) => student.checked)
    .map((student: StudentsChecklistItem) => student.id);
  if (
    state.interview.modifiedInterview &&
    state.interview.modifiedInterview.id
  ) {
    await InterviewService.promoteStudents(
      state.interview.modifiedInterview.id,
      studentList
    );
    dispatch(changeStudentListView(false));
  }
};
