import { combineReducers } from "@reduxjs/toolkit";
import InterviewReducer from "../../interview/redux/slice";
import ProfileRReducer from "../../profile/redux/slice";
const rootReducer = combineReducers({
  interview: InterviewReducer,
  profile: ProfileRReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
