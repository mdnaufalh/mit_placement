import { RootState } from "../../../common/redux/reducer";
import { connect } from "react-redux";
import ProfileDisplay from "../components/ProfileDisplay";

const mapStateToProps = (state: RootState) => ({
  student: state.profile.profile,
  editMode: state.profile.editMode,
});

export default connect(mapStateToProps)(ProfileDisplay);
