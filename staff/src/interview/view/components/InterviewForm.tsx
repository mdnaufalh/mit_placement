import * as React from "react";
import Interview from "../../../common/types/Interview";
import Course from "../../../common/types/Course";
import CourseList from "./CourseList";
import InterviewFormInputs from "./InterviewFormInputs";
import Modal from "react-modal";
import RoundStudentListContainer from "../containers/RoundStudentListContainer";
import RoundListContainer from "../containers/RoundListContainer";

interface Props {
  changeEditMode: (editMode: boolean) => void;
  changeStudentListView: (studentListView: boolean) => void;
  editMode: boolean;
  interview: Interview | null;
  changeInterview: (interview: Interview) => void;
  courseList: Array<Course>;
  save: () => void;
}

export default function (props: Props) {
  if (!props.interview) {
    return <div />;
  } else {
    return (
      <Modal
        isOpen={props.editMode}
        onRequestClose={() => {
          props.changeEditMode(false);
        }}
        contentLabel="Change Interview"
        style={styles.container}
      >
        <InterviewFormInputs
          interview={props.interview}
          changeInterview={props.changeInterview}
        />
        <CourseList
          courseList={props.courseList}
          changeInterview={props.changeInterview}
          interview={props.interview}
        />
        {/* @ts-ignore */}
        <RoundListContainer />
        <button style={styles.button} onClick={props.save}>
          Save
        </button>
        <RoundStudentListContainer />
      </Modal>
    );
  }
}

const styles = {
  container: {
    content: {
      width: "fit-content",
      alignSelf: "center",
      height: "fit-content",
    },
  },
  button: {
    alignSelf: "right",
    margin: 5,
    marginRight: 20,
    padding: 15,
    borderWidth: 0,
    float: "right" as "right",
  },
};
