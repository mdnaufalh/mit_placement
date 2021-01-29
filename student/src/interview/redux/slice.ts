import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import Interview from "../../common/types/Interview";

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
  },
});

export default Slice.reducer;

export const { changeInterviewList, changeSelected } = Slice.actions;
