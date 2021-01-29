import * as React from "react";
import Interview from "../../../common/types/Interview";
import InterviewStatus from "./InterviewStatus";
import Student from "../../../common/types/Student";

interface Props {
  interview: Interview;
  student: Student;
  selectInterview: () => void;
  applyInterview: () => void;
}

export default function (props: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.image} />
      <span style={styles.company}>{props.interview.company}</span>
      <span style={styles.text}>{props.interview.location}</span>

      <div style={styles.text}>CTC {props.interview.ctc}</div>
      <InterviewStatus
        interview={props.interview}
        applyInterview={props.applyInterview}
        student={props.student}
      />
    </div>
  );
}

const styles = {
  container: {
    margin: 10,
    marginBottom: 0,
    marginRight: 15,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column" as "column",
  },
  image: {
    height: 200,
    width: "-webkit-fill-available",
    backgroundColor: "#888",
  },
  company: {
    fontWeight: "bold" as "bold",
    marginTop: 10,
  },
  text: {
    color: "#888",
    fontWeight: "bold" as "bold",
  },
  status: {},
};
