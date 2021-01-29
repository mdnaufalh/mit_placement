import Course from "./Course";
import Round from "./Round";

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
  applicationDeadline: number = 0;
  courses: Array<Course> = [];
  rounds: Array<Round> = [];

  static formatTimestamp(interview: Interview): any {
    return {
      ...interview,
      applicationDeadline: new Date(interview.applicationDeadline)
        .toISOString()
        .replace("Z", "")
        .replace("T", " ")
        .slice(0, -4),
      rounds: interview.rounds.map((round: Round) => ({
        ...round,
        timestamp: new Date(round.timestamp)
          .toJSON()
          .replace("Z", "")
          .replace("T", " ")
          .slice(0, -3),
      })),
    };
  }

  static addRound = (interview: Interview): Interview => ({
    ...interview,
    rounds: [
      ...interview.rounds,
      {
        name: "",
        timestamp: Date.now(),
        number: interview.rounds.length,
        venue: "",
      },
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
    rounds: interview.rounds.map((round: Round) => {
      if (round.number === roundNumber) {
        // @ts-ignore
        round[property] = value;
        return round;
      } else {
        return round;
      }
    }),
  });
}
