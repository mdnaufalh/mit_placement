import { Interview, Student, Course } from "../types";
import InterviewRepository from "../../infrastructure/repositories/InterviewRepository";
import StudentRepository from "../../infrastructure/repositories/StudentRepository";

class InterviewService {
  async fetchAllInterviews(collegeId: number): Promise<Array<Interview>> {
    return InterviewRepository.fetchAllInterviews(collegeId);
  }

  async applyInterview(studentId: number, interviewId: number): Promise<void> {
    const interview: Interview = await InterviewRepository.fetchInterview(
      interviewId
    );
    const student: Student = await StudentRepository.fetchStudent(studentId);
    console.log(interview);
    console.log(student);
    if (!this.checkInterviewEligibility(student, interview)) {
      throw new Error("Not eligible to apply");
    }
    await InterviewRepository.applyInterview(studentId, interviewId);
  }

  checkInterviewEligibility(student: Student, interview: Interview) {
    return (
      interview.sslcThreshold <= student.sslcPercentage &&
      interview.hscThreshold <= student.hscPercentage &&
      interview.ugCgpaThreshold <= student.ugCgpa &&
      interview.pgCgpaThreshold <= student.pgCgpa &&
      interview.historyOfArrearsAllowed >= student.historyOfArrears &&
      interview.arrearsAllowed >= student.currentArrears &&
      interview.courses.filter(
        (course: Course) => student.course === course.name
      ).length &&
      interview.applicationDeadline >= Date.now()
    );
  }
}

export default new InterviewService();
