import Interview from "../types/Interview";
import StudentsChecklistItem from "../types/StudentsChecklistItem";
import Course from "../types/Course";

export default interface IInterviewService {
  fetchAllInterviews(collegeId: number): Promise<Array<Interview>>;

  fetchRoundList(
    interviewId: number,
    roundNumber: number
  ): Promise<Array<StudentsChecklistItem>>;

  promoteStudents(
    interviewId: number,
    studentList: Array<number>
  ): Promise<void>;

  demoteStudents(
    interviewId: number,
    studentList: Array<number>
  ): Promise<void>;

  saveInterview(interview: Interview): Promise<void>;

  fetchAllCourses(collegeId: number): Promise<Array<Course>>;
}
