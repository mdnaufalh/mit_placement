import Course from "./Course";
import Round from "./Round";

export default interface Interview {
  id: number;
  company: string;
  jobTitle: string;
  ctc: number;
  location: string;
  sslcThreshold: number;
  hscThreshold: number;
  ugCgpaThreshold: number;
  pgCgpaThreshold: number;
  arrearsAllowed: number;
  historyOfArrearsAllowed: number;
  type: "Internship" | "FullTime";
  applicationDeadline: number;
  courses: Array<Course>;
  rounds: Array<Round>;
  eligibility: boolean;
  round: number;
}
