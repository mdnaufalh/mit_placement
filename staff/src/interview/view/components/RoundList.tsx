import * as React from "react";
import Interview from "../../../common/types/Interview";
import Round from "../../../common/types/Round";

interface Props {
  interview: Interview | null;
  changeInterview: (interview: Interview) => void;
  changeRoundNumber: (roundNumber: number) => void;
  roundStudentListEntered: () => void;
  changeRoundListMode: (mode: boolean) => void;
}

export default function (props: Props) {
  if (!props.interview) {
    return <div />;
  }
  return (
    <div style={styles.container}>
      <button
        style={styles.addButton}
        onClick={() => {
          props.changeInterview(
            Interview.addRound(props.interview as Interview)
          );
        }}
      >
        Add new event
      </button>
      {props.interview.rounds.length ? (
        <table>
          <tr>
            <td>Name</td>
            <td>Timings</td>
            <td>List</td>
            <td>Remove</td>
          </tr>
          {props.interview.rounds ? (
            props.interview.rounds.map((event: Round, index: number) => (
              <tr>
                <td>
                  <input
                    style={styles.input}
                    onChange={(e) => {
                      props.changeInterview(
                        Interview.changeRoundProperty(
                          props.interview as Interview,
                          index + 1,
                          "name",
                          e.target.value
                        )
                      );
                    }}
                    value={event.name}
                  />
                </td>
                <td>
                  <input
                    style={styles.input}
                    onChange={(e) => {
                      props.changeInterview(
                        Interview.changeRoundProperty(
                          props.interview as Interview,
                          index,
                          "timestamp",
                          new Date(e.target.value).getTime()
                        )
                      );
                    }}
                    // @ts-ignore
                    value={new Date(props.interview.applicationDeadline)
                      .toJSON()
                      .replace("Z", "")
                      .slice(0, -4)}
                    type={"datetime-local"}
                  />
                </td>
                <td
                  onClick={() => {
                    props.changeRoundNumber(index + 1);
                    props.roundStudentListEntered();
                    props.changeRoundListMode(true);
                  }}
                >
                  <button style={styles.button}>List</button>
                </td>
                <td
                  onClick={() => {
                    props.changeInterview(
                      Interview.removeRound(
                        props.interview as Interview,
                        index + 1
                      )
                    );
                  }}
                >
                  <button style={styles.button}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <div />
          )}
        </table>
      ) : (
        <div />
      )}
    </div>
  );
}

const styles = {
  container: {
    margin: 5,
    paddingTop: 10,
  },
  addButton: {
    alignSelf: "right",
    padding: 10,
    marginBottom: 10,
    borderWidth: 0,
  },
  input: {
    padding: 8,
  },
  button: {
    alignSelf: "right",
    padding: 10,
    borderWidth: 0,
  },
};
