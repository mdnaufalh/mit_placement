import Interview from "../types/Interview";
import StudentsChecklistItem from "../types/StudentsChecklistItem";
import RoundMap from "../types/RoundMap";

export default interface IInterviewRepository {
  fetchAll(collegeId: number): Promise<Array<Interview>>;
  fetchRoundList(
    interviewId: number,
    roundNumber: number
  ): Promise<Array<StudentsChecklistItem>>;
  fetchStudentsStatus(
    interviewId: number,
    studentList: Array<number>
  ): Promise<Array<RoundMap>>;
  updateStudentStatus(modifiedList: Array<RoundMap>): Promise<void>;
  insert(interview: Interview): Promise<void>;
  update(interview: Interview): Promise<void>;
}
