import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import ProfileEdit from "../components/ProfileEdit";
import { AppDispatch } from "../../../common/redux/store";
import {
  changeCurrentArrears,
  changeHistoryOfArrears,
  changeHscPercentage,
  changeName,
  changePgCgpa,
  changeResume,
  changeSslcPercentage,
  changeUgCgpa,
} from "../../redux";

const mapStateToProps = (state: RootState) => ({
  student: state.profile.modifiedProfile,
  editMode: state.profile.editMode,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeName: (name: string) => {
    dispatch(changeName(name));
  },
  changeSslcPercentage: (value: number) => {
    dispatch(changeSslcPercentage(value));
  },
  changeHscPercentage: (value: number) => {
    dispatch(changeHscPercentage(value));
  },
  changeUgCgpa: (value: number) => {
    dispatch(changeUgCgpa(value));
  },
  changePgCgpa: (value: number) => {
    dispatch(changePgCgpa(value));
  },
  changeCurrentArrears: (value: number) => {
    dispatch(changeCurrentArrears(value));
  },
  changeHistoryOfArrears: (value: number) => {
    dispatch(changeHistoryOfArrears(value));
  },
  changeResume: (value: string) => {
    dispatch(changeResume(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
