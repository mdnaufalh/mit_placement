import * as React from "react";
import Course from "../../../common/types/Course";
import Interview from "../../../common/types/Interview";
// @ts-ignore
import { Multiselect } from "multiselect-react-dropdown";

interface Props {
  courseList: Array<Course>;
  interview: Interview;
  changeInterview: (interview: Interview) => void;
}

export default function (props: Props) {
  return (
    <div style={styles.container}>
      <Multiselect
        options={props.courseList}
        selectedValues={props.interview.courses}
        onSelect={(selectedList: any, selectedItem: any) => {
          props.changeInterview({
            ...props.interview,
            courses: selectedList,
          });
        }}
        onRemove={(selectedList: any, selectedItem: any) => {
          props.changeInterview({
            ...props.interview,
            courses: selectedList,
          });
        }}
        displayValue="name"
      />
    </div>
  );
}

const styles = {
  container: {
    margin: 5,
  },
};
