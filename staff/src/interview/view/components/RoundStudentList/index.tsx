import * as React from "react";
import Modal from "react-modal";
import StudentsChecklistItem from "../../../../common/types/StudentsChecklistItem";
import Table from "./Table";

interface Props {
  isOpen: boolean;
  changeOpen: (mode: boolean) => void;
  studentList: Array<StudentsChecklistItem>;
  changeStudentList: (studentList: Array<StudentsChecklistItem>) => void;
  promoteStudents: () => void;
  demoteStudents: () => void;
}

export default function (props: Props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => {
        props.changeOpen(false);
      }}
      contentLabel="Change Interview"
      style={styles.container}
    >
      <Table
        changeStudentList={props.changeStudentList}
        studentList={props.studentList}
      />
      <button style={styles.button} onClick={props.promoteStudents}>
        Promote
      </button>
      <button style={styles.button} onClick={props.demoteStudents}>
        Demote
      </button>
    </Modal>
  );
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
