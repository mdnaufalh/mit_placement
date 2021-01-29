import * as React from "react";
import StudentsChecklistItem from "../../../../common/types/StudentsChecklistItem";

interface Props {
  studentList: Array<StudentsChecklistItem>;
  changeStudentList: (studentList: Array<StudentsChecklistItem>) => void;
}

export default function (props: Props) {
  if (!props.studentList.length) {
    return <div>No students to show</div>;
  } else {
    return (
      <table>
        <tr>
          <td>Register Number</td>
          <td>Name</td>
          <td>Select</td>
        </tr>
        {props.studentList.map(
          (student: StudentsChecklistItem, index: number) => (
            <tr>
              <td>{student.registerNumber}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type={"checkbox"}
                  checked={student.checked}
                  onChange={() => {
                    props.changeStudentList(
                      props.studentList.map(
                        (
                          student: StudentsChecklistItem,
                          currentIndex: number
                        ) => {
                          if (index === currentIndex) {
                            return { ...student, checked: !student.checked };
                          } else {
                            return student;
                          }
                        }
                      )
                    );
                  }}
                />
              </td>
            </tr>
          )
        )}
      </table>
    );
  }
}
