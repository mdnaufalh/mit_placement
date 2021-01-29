import * as React from "react";
import Interview from "../../../common/types/Interview";

interface Props {
  interview: Interview;
  changeInterview: (interview: Interview) => void;
}

export default function (props: Props) {
  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Company Name"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            company: e.target.value,
          });
        }}
        value={props.interview.company}
      />
      <input
        style={styles.input}
        placeholder="Role"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            jobTitle: e.target.value,
          });
        }}
        value={props.interview.jobTitle}
      />
      <input
        style={styles.input}
        placeholder="Location"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            location: e.target.value,
          });
        }}
        value={props.interview.location}
      />
      <input
        style={styles.input}
        placeholder="CTC"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            ctc: parseInt(e.target.value, 10),
          });
        }}
        value={props.interview.ctc}
      />
      <input
        style={styles.input}
        placeholder="Application Deadline"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            applicationDeadline: new Date(e.target.value).getTime(),
          });
        }}
        value={new Date(props.interview.applicationDeadline)
          .toJSON()
          .replace("Z", "")
          .slice(0, -4)}
        type={"datetime-local"}
      />
      <input
        style={styles.input}
        placeholder="SSLC Percentage"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            sslcThreshold: parseInt(e.target.value, 10),
          });
        }}
        value={props.interview.sslcThreshold}
      />
      <input
        style={styles.input}
        placeholder="HSC Percentage"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            hscThreshold: parseInt(e.target.value, 10),
          });
        }}
        value={props.interview.hscThreshold}
      />
      <input
        style={styles.input}
        placeholder="UG CGPA"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            ugCgpaThreshold: parseInt(e.target.value, 10),
          });
        }}
        value={props.interview.ugCgpaThreshold}
      />
      <input
        style={styles.input}
        placeholder="PG CGPA"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            pgCgpaThreshold: parseInt(e.target.value, 10),
          });
        }}
        value={props.interview.pgCgpaThreshold}
      />
      <input
        style={styles.input}
        placeholder="Arrears Allowed"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            arrearsAllowed: parseInt(e.target.value, 10),
          });
        }}
        value={props.interview.arrearsAllowed}
      />
      <input
        style={styles.input}
        placeholder="History of Arrears"
        onChange={(e) => {
          props.changeInterview({
            ...props.interview,
            historyOfArrearsAllowed: parseInt(e.target.value, 10),
          });
        }}
        value={props.interview.historyOfArrearsAllowed}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  input: {
    margin: 5,
    paddingLeft: 5,
    height: 30,
  },
};
