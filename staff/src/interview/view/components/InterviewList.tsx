import * as React from "react";
import Interview from "../../../common/types/Interview";
import InterviewListItem from "./InterviewListItem";
import { useEffect } from "react";

interface Props {
  interviewList: Array<Interview>;
  selectInterview: (interview: Interview) => void;
  changeEditMode: (editMode: boolean) => void;
  interviewListEntered: () => void;
}

export default function (props: Props) {
  const effect = () => {
    props.interviewListEntered();
  };

  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={styles.container}>
      <button
        style={styles.addButton}
        onClick={() => {
          props.selectInterview(new Interview());
          props.changeEditMode(true);
        }}
      >
        Add Interview
      </button>
      {props.interviewList.map((interview: Interview) => (
        <InterviewListItem
          interview={interview}
          selectInterview={() => {
            props.selectInterview(interview);
          }}
          changeEditMode={props.changeEditMode}
        />
      ))}
    </div>
  );
}

const styles: any = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 5,
  },
  addButton: {
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
    borderStyle: "solid",

    minHeight: 300,
    minWidth: 320,
    margin: 10,
  },
};
