import Course from "./Course";
import Round from "./Round";
import * as _ from "lodash";

export default class Interview {
  id: number | null = null;
  company: string = "";
  jobTitle: string = "";
  ctc: number = 0;
  location: string = "";
  sslcThreshold: number = 0;
  hscThreshold: number = 0;
  ugCgpaThreshold: number = 0;
  pgCgpaThreshold: number = 0;
  arrearsAllowed: number = 0;
  historyOfArrearsAllowed: number = 0;
  type: "Internship" | "FullTime" = "FullTime";
  applicationDeadline: number = 1000000;
  courses: Array<Course> = [];
  rounds: Array<Round> = [];

  static addRound = (interview: Interview): Interview => ({
    ...interview,
    rounds: [
      ...interview.rounds,
      {
        name: "",
        timestamp: Date.now(),
        number: interview.rounds.length,
        venue: "",
      } as Round,
    ],
  });

  static removeRound = (
    interview: Interview,
    roundNumber: number
  ): Interview => ({
    ...interview,
    rounds: interview.rounds
      .filter((round: Round) => round.number !== roundNumber)
      .map((round: Round, index: number) => ({ ...round, number: index + 1 })),
  });

  static changeRoundProperty = (
    interview: Interview,
    roundNumber: number,
    property: string,
    value: any
  ): Interview => ({
    ...interview,
    rounds: interview.rounds.map((round: Round, index: number) => {
      let newRound = _.cloneDeep(round);
      if (index + 1 === roundNumber) {
        switch (property) {
          case "name":
            newRound.name = value;
            break;
          case "timestamp":
            newRound.timestamp = value;
            break;
          default:
            alert("DEFAULT");
        }
        return newRound;
      } else {
        return newRound;
      }
    }),
  });
}
