import Interview from "../types/Interview";
import StudentsChecklistItem from "../types/StudentsChecklistItem";
import Course from "../types/Course";

export default interface IInterviewController {
  fetchAllInterviews(): Promise<Array<Interview>>;

  fetchRoundList(roundId: number): Promise<Array<StudentsChecklistItem>>;

  promoteStudents(
    interviewId: number,
    studentList: Array<string>
  ): Promise<void>;

  saveInterview(interview: Interview): Promise<void>;

  fetchAllCourses(): Promise<Array<Course>>;
}
