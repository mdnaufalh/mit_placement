import * as React from "react";
import ProfileDisplayContainer from "../containers/ProfileDisplayContainer";
import ProfileEditContainer from "../containers/ProfileEditContainer";
import { useEffect } from "react";
import MenuIcon from "./MenuIcon";

interface Props {
  editMode: boolean;
  changeEditMode: (editMode: boolean) => void;
  resetModifiedStudent: () => void;
  sendChangeRequest: () => void;
  profileEntered: () => void;
}

export default function (props: Props) {
  useEffect(() => {
    props.profileEntered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div style={styles.menu}>
        <MenuIcon />
      </div>
      {props.editMode ? (
        <div>
          <ProfileEditContainer />
          <button
            style={styles.requestButton}
            onClick={() => {
              props.changeEditMode(false);
              props.sendChangeRequest();
            }}
          >
            RequestChange
          </button>
          <button
            style={styles.cancelButton}
            onClick={() => {
              props.changeEditMode(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <ProfileDisplayContainer />
          <button
            style={styles.editButton}
            onClick={() => {
              props.resetModifiedStudent();
              props.changeEditMode(true);
            }}
          >
            EDIT
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  editButton: {
    borderWidth: 0,
    backgroundColor: "#2343df",
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold" as "bold",
    width: "-webkit-fill-available",
  },
  requestButton: {
    borderWidth: 0,
    backgroundColor: "#2343df",
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold" as "bold",
    marginBottom: 10,
    width: "-webkit-fill-available",
  },
  cancelButton: {
    borderWidth: 0,
    backgroundColor: "#2343df",
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold" as "bold",
    width: "-webkit-fill-available",
  },
  menu: {
    backgroundColor: "#ccc",
    position: "fixed" as "fixed",
    borderRadius: 10,
    top: 20,
    left: 20,
  },
};
