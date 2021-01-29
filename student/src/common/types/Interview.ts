import Course from "./Course";
import Round from "./Round";
import Student from "./Student";

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
  round: number | null = null;

  static checkEligibility(interview: Interview, student: Student): boolean {
    return <boolean>(
      (interview.sslcThreshold <= student.sslcPercentage &&
        interview.hscThreshold <= student.hscPercentage &&
        interview.ugCgpaThreshold <= student.ugCgpa &&
        interview.pgCgpaThreshold <= student.pgCgpa &&
        interview.historyOfArrearsAllowed >= student.historyOfArrears &&
        interview.arrearsAllowed >= student.currentArrears &&
        interview.courses.filter(
          (course: Course) => student.course === course.name
        ).length &&
        interview.applicationDeadline >= Date.now())
    );
  }
}
