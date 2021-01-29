import { AppThunk, AppDispatch } from "../../common/redux/store";
import { RootState } from "../../common/redux/reducer";
import ProfileService from "../common/core/ProfileService";
import { changeStudent } from "./slice";
import Student from "../../common/types/Student";

export const profileEntered = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const student: Student = await ProfileService.fetchProfile();
  dispatch(changeStudent(student));
};

export const saveChangeRequest = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const state: RootState = getState();
  if (state.profile.modifiedProfile) {
    const student: Student = state.profile.modifiedProfile;
    await ProfileService.saveChangeRequest(student);
  }
};
