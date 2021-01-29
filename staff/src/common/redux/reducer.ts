import { combineReducers } from "@reduxjs/toolkit";
import InterviewReducer from "../../interview/redux";
import StudentChangeReducer from "../../studentChange/redux";

const rootReducer = combineReducers({
  interview: InterviewReducer,
  studentChange: StudentChangeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
