import * as React from "react";
import Interview from "../../../common/types/Interview";
import InterviewListItem from "./InterviewListItem";
import Student from "../../../common/types/Student";
import { useEffect } from "react";
import MenuIcon from "../../../profile/view/components/MenuIcon";

interface Props {
  interviewList: Array<Interview>;
  selectInterview: (interview: Interview) => void;
  applyInterview: (interview: Interview) => void;
  interviewListEntered: () => void;
  student: Student | null;
}

export default function (props: Props) {
  useEffect(() => {
    props.interviewListEntered();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.student) {
    return (
      <div>
        <div style={styles.menu}>
          <MenuIcon />
        </div>
        <div style={styles.container}>
          {props.interviewList.map((interview: Interview) => (
            <InterviewListItem
              // @ts-ignore
              student={props.student}
              interview={interview}
              selectInterview={() => {
                props.selectInterview(interview);
              }}
              applyInterview={() => {
                props.applyInterview(interview);
              }}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

const styles = {
  container: { marginTop: 10, marginBottom: 20 },
  menu: {
    backgroundColor: "#ccc",
    position: "fixed" as "fixed",
    borderRadius: 10,
    top: 20,
    left: 20,
  },
};
