import * as React from "react";
import Interview from "../../../common/types/Interview";
import Student from "../../../common/types/Student";

interface Props {
  interview: Interview;
  student: Student;
  applyInterview: () => void;
}

export default function (props: Props) {
  if (
    !props.interview.round &&
    !Interview.checkEligibility(props.interview, props.student)
  ) {
    return (
      <div style={{ ...styles.container, ...styles.notEligible }}>
        Not Eligible
      </div>
    );
  } else if (
    !props.interview.round &&
    Interview.checkEligibility(props.interview, props.student)
  ) {
    return (
      <button
        style={{ ...styles.container, ...styles.apply }}
        onClick={props.applyInterview}
      >
        Apply
      </button>
    );
  } else if (props.interview.round === 1) {
    return (
      <div style={{ ...styles.container, ...styles.selected }}>Applied</div>
    );
  } else {
    // @ts-ignore
    if (props.interview.round > 1) {
      return (
        <div style={{ ...styles.container, ...styles.selected }}>
          {/* @ts-ignore*/}
          Round {props.interview.round - 1} selected
        </div>
      );
    } else {
      // @ts-ignore
      return (
        <div style={{ ...styles.container, ...styles.rejected }}>
          {/* @ts-ignore*/}
          Round {-props.interview.round} rejected
        </div>
      );
    }
  }
}

const styles = {
  container: {
    // width: "-webkit-fill-available",
    textAlign: "center" as "justify",
    margin: 10,
    padding: 10,
    fontWeight: "bold" as "bold",
  },
  apply: {
    backgroundColor: "#88e",
    borderWidth: 0,
    color: "white",
  },
  notEligible: {
    backgroundColor: "red",
    color: "white",
  },
  selected: {},
  rejected: {},
};
