import React from "react";
import Interview from "../../../common/types/Interview";

interface Props {
  interview: Interview;
  selectInterview: () => void;
  changeEditMode: (editMode: boolean) => void;
}

export default function (props: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.text}>{props.interview.company}</div>
      <div style={styles.text}>{props.interview.location}</div>
      <div style={styles.text}>{props.interview.ctc}</div>
      <button
        onClick={() => {
          props.selectInterview();
          props.changeEditMode(true);
        }}
        style={styles.button}
      >
        Edit
      </button>
    </div>
  );
}

const styles: any = {
  container: {
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
    borderStyle: "solid",
    width: "fit-content",
    minHeight: 300,
    minWidth: 300,
    margin: 10,
  },
  text: {
    padding: 5,
  },
  button: {
    backgroundColor: "#219037",
    color: "white",
    borderWidth: 0,
    padding: 10,
  },
};
