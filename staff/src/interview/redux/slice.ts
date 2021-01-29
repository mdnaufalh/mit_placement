import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import Interview from "../../common/types/Interview";
import StudentsChecklistItem from "../../common/types/StudentsChecklistItem";
import Course from "../../common/types/Course";

const Slice = createSlice({
  name: "Interview",
  initialState,
  reducers: {
    changeInterviewList(state, action: PayloadAction<Array<Interview>>) {
      state.interviewList = action.payload;
    },
    changeSelected(state, action: PayloadAction<Interview>) {
      state.selected = action.payload;
    },
    changeModified(state, action: PayloadAction<Interview>) {
      state.modifiedInterview = action.payload;
    },
    changeStudentList(
      state,
      action: PayloadAction<Array<StudentsChecklistItem>>
    ) {
      state.studentList = action.payload;
    },
    changeRound(state, action: PayloadAction<number>) {
      state.selectedRound = action.payload;
    },
    changeEditMode(state, action: PayloadAction<boolean>) {
      state.editMode = action.payload;
    },
    changeStudentListView(state, action: PayloadAction<boolean>) {
      state.studentListView = action.payload;
    },
    changeCourseList(state, action: PayloadAction<Array<Course>>) {
      state.courseList = action.payload;
    },
  },
});

export default Slice.reducer;

export const {
  changeInterviewList,
  changeSelected,
  changeStudentList,
  changeEditMode,
  changeModified,
  changeRound,
  changeStudentListView,
  changeCourseList,
} = Slice.actions;
