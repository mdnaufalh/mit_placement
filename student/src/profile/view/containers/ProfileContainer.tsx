import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import Profile from "../components";
import { AppDispatch } from "../../../common/redux/store";
import {
  saveChangeRequest,
  changeEditMode,
  resetModifiedStudent,
  profileEntered,
} from "../../redux";

const mapStateToProps = (state: RootState) => ({
  editMode: state.profile.editMode,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  profileEntered: () => {
    dispatch(profileEntered());
  },
  changeEditMode: (editMode: boolean) => {
    dispatch(changeEditMode(editMode));
  },
  sendChangeRequest: () => {
    dispatch(saveChangeRequest());
  },
  resetModifiedStudent() {
    dispatch(resetModifiedStudent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
