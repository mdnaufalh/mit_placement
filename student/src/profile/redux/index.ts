import Reducer, {
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
} from "./slice";
import { saveChangeRequest, profileEntered } from "./thunks";

export default Reducer;
export {
  changeStudent,
  profileEntered,
  saveChangeRequest,
  changeUgCgpa,
  changeSslcPercentage,
  changeResume,
  changePgCgpa,
  changeName,
  changeHscPercentage,
  changeHistoryOfArrears,
  changeCurrentArrears,
  changeEditMode,
  resetModifiedStudent,
};
