import * as React from "react";
import Student from "../../../common/types/Student";

interface Props {
  student: Student | null;
  editMode: boolean;
}

export default function (props: Props) {
  if (!props.student) {
    return <div />;
  }
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img style={styles.image} />
      </div>
      <table style={styles.container}>
        <tr style={styles.field}>
          <td style={styles.fieldName}>Name</td>
          <td style={styles.fieldValue}>{props.student.name}</td>
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
          <td style={styles.fieldValue}>{props.student.sslcPercentage}</td>
        </tr>
        <tr style={styles.field}>
          <td style={styles.fieldName}>HSC Percentage</td>
          <td style={styles.fieldValue}>{props.student.hscPercentage}</td>
        </tr>
        <tr style={styles.field}>
          <td style={styles.fieldName}>UG CGPA</td>
          <td style={styles.fieldValue}>{props.student.ugCgpa}</td>
        </tr>
        <tr style={styles.field}>
          <td style={styles.fieldName}>PG CGPA</td>
          <td style={styles.fieldValue}>{props.student.pgCgpa}</td>
        </tr>
        <tr style={styles.field}>
          <td style={styles.fieldName}>Current Arrears</td>
          <td style={styles.fieldValue}>{props.student.currentArrears}</td>
        </tr>
        <tr style={styles.field}>
          <td style={styles.fieldName}>History of Arrears</td>
          <td style={styles.fieldValue}>{props.student.historyOfArrears}</td>
        </tr>
        <tr style={styles.field}>
          <td style={styles.fieldName}>Resume</td>
          <td style={styles.fieldValue}>{props.student.resume}</td>
        </tr>
        <tr style={styles.field}>
          <td style={styles.fieldName}>Placed Count</td>
          <td style={styles.fieldValue}>{props.student.placedCount}</td>
        </tr>
      </table>
    </div>
  );
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
  field: {
    color: "#666",
    lineHeight: 1.2,
    paddingTop: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #f2f2f2",
  },
};
