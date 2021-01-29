import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import Student from "../../common/types/Student";

const Slice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    changeStudent(state, action: PayloadAction<Student>) {
      state.profile = action.payload;
      state.modifiedProfile = action.payload;
    },
    changeName(state, action: PayloadAction<string>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.name = action.payload;
      }
    },
    changeSslcPercentage(state, action: PayloadAction<number>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.sslcPercentage = action.payload;
      }
    },
    changeHscPercentage(state, action: PayloadAction<number>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.hscPercentage = action.payload;
      }
    },
    changeUgCgpa(state, action: PayloadAction<number>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.ugCgpa = action.payload;
      }
    },
    changePgCgpa(state, action: PayloadAction<number>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.pgCgpa = action.payload;
      }
    },
    changeCurrentArrears(state, action: PayloadAction<number>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.currentArrears = action.payload;
      }
    },
    changeHistoryOfArrears(state, action: PayloadAction<number>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.historyOfArrears = action.payload;
      }
    },
    changeResume(state, action: PayloadAction<string>) {
      if (state.modifiedProfile) {
        state.modifiedProfile.resume = action.payload;
      }
    },
    changeEditMode(state, action: PayloadAction<boolean>) {
      state.editMode = action.payload;
    },
    resetModifiedStudent(state) {
      state.modifiedProfile = state.profile;
    },
  },
});

export default Slice.reducer;

export const {
  changeStudent,
  changeCurrentArrears,
  changeHistoryOfArrears,
  changeHscPercentage,
  changeName,
  changePgCgpa,
  changeResume,
  changeSslcPercentage,
  changeUgCgpa,
  changeEditMode,
  resetModifiedStudent,
} = Slice.actions;
