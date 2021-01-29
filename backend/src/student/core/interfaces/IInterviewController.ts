import { Interview } from "../types";

export default interface IInterviewController {
  fetchAllInterviews(collegeId: number): Promise<Array<Interview>>;
  applyInterview(studentId: number, interviewId: number): Promise<void>;
}
