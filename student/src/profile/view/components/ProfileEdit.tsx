import * as React from "react";
import Student from "../../../common/types/Student";

interface Props {
  student: Student | null;
  editMode: boolean;
  changeName: (name: string) => void;
  changeSslcPercentage: (value: number) => void;
  changeHscPercentage: (value: number) => void;
  changeUgCgpa: (value: number) => void;
  changePgCgpa: (value: number) => void;
  changeCurrentArrears: (value: number) => void;
  changeHistoryOfArrears: (value: number) => void;
  changeResume: (value: string) => void;
}

export default function (props: Props) {
  if (props.student === null) {
    return <div />;
  } else {
    return (
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img style={styles.image} />
        </div>
        <table style={styles.container}>
          <tr style={styles.field}>
            <td style={styles.fieldName}>Name</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                placeholder={"Name"}
                value={props.student.name}
                onChange={(e) => {
                  props.changeName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>Register Number</td>
            <td style={styles.fieldValue}>{props.student.registerNumber}</td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>College</td>
            <td style={styles.fieldValue}>{props.student.college}</td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>Course</td>
            <td style={styles.fieldValue}>{props.student.course}</td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>SSLC Percentage</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                type={"number"}
                placeholder={"SSLC Percentage"}
                value={props.student.sslcPercentage}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    props.changeSslcPercentage(parseFloat(e.target.value));
                  } else {
                    props.changeSslcPercentage(0);
                  }
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>HSC Percentage</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                placeholder={"HSC Percentage"}
                value={props.student.hscPercentage}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    props.changeHscPercentage(parseFloat(e.target.value));
                  } else {
                    props.changeHscPercentage(0);
                  }
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>UG CGPA</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                placeholder={"UG CGPA"}
                value={props.student.ugCgpa}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    props.changeUgCgpa(parseFloat(e.target.value));
                  } else {
                    props.changeUgCgpa(0);
                  }
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>PG CGPA</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                placeholder={"PG CGPA"}
                value={props.student.pgCgpa}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    props.changePgCgpa(parseFloat(e.target.value));
                  } else {
                    props.changePgCgpa(0);
                  }
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>Current Arrears</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                placeholder={"Number of Current Arrears"}
                value={props.student.currentArrears}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    props.changeCurrentArrears(parseFloat(e.target.value));
                  } else {
                    props.changeCurrentArrears(0);
                  }
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>History of Arrears</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                placeholder={"Number of Total Arrears"}
                value={props.student.historyOfArrears}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    props.changeHistoryOfArrears(parseFloat(e.target.value));
                  } else {
                    props.changeHistoryOfArrears(0);
                  }
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>Resume</td>
            <td style={styles.fieldValue}>
              <input
                style={styles.fieldInput}
                placeholder={"Resume"}
                value={props.student.resume ? props.student.resume : ""}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    props.changeResume(e.target.value);
                  }
                }}
              />
            </td>
          </tr>
          <tr style={styles.field}>
            <td style={styles.fieldName}>Placed Count</td>
            <td style={styles.fieldValue}>{props.student.placedCount}</td>
          </tr>
        </table>
      </div>
    );
  }
}

const styles = {
  imageContainer: {
    backgroundColor: "#333",
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "#ccc",
    margin: 10,
    borderRadius: 10,
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
  },
  container: {
    boxShadow: "0px 1rem 1.5rem rgba(black, 0.5)",
    width: "-webkit-fill-available",
  },
  table: {
    border: "1px solid #f2f2f2",
    marginBottom: 0,
    width: "-webkit-fill-available",
  },
  fieldName: {
    color: "#666",
    lineHeight: 1.2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #f2f2f2",
    width: "50%",
  },
  fieldValue: {
    color: "#666",
    lineHeight: 1.2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "50%",
    borderBottom: "1px solid #f2f2f2",
  },
  fieldInput: {
    border: "1px solid #ccc",
    color: "#666",
    lineHeight: 1.2,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "50%",
    borderBottom: "1px solid #f2f2f2",
  },
  field: {
    color: "#666",
    lineHeight: 1.2,
    paddingTop: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #f2f2f2",
  },
};
