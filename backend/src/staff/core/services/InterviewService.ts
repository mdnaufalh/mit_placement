import IInterviewService from "./IInterviewService";
import { Course, RoundMap, Interview, StudentsChecklistItem } from "../types";
import CollegeRepository from "../../infrastructure/repositories/CollegeRepository";
import InterviewRepository from "../../infrastructure/repositories/InterviewRepository";

class InterviewService implements IInterviewService {
  async fetchAllCourses(collegeId: number): Promise<Array<Course>> {
    return CollegeRepository.fetchAllCourses(collegeId);
  }

  async fetchAllInterviews(collegeId: number): Promise<Array<Interview>> {
    return InterviewRepository.fetchAll(collegeId);
  }

  async fetchRoundList(
    interviewId: number,
    roundNumber: number
  ): Promise<Array<StudentsChecklistItem>> {
    return InterviewRepository.fetchRoundList(interviewId, roundNumber);
  }

  async promoteStudents(
    interviewId: number,
    studentList: Array<number>
  ): Promise<void> {
    const list: Array<RoundMap> = await InterviewRepository.fetchStudentsStatus(
      interviewId,
      studentList
    );
    console.log(list);
    const modifiedList: Array<RoundMap> = list.map((entry: RoundMap) => ({
      ...entry,
      roundNumber: entry.roundNumber + 1,
    }));
    await InterviewRepository.updateStudentStatus(modifiedList);
  }

  async demoteStudents(
    interviewId: number,
    studentList: Array<number>
  ): Promise<void> {
    const list: Array<RoundMap> = await InterviewRepository.fetchStudentsStatus(
      interviewId,
      studentList
    );
    console.log(list);
    const modifiedList: Array<RoundMap> = list.map((entry: RoundMap) => ({
      ...entry,
      roundNumber: entry.roundNumber - 1,
    }));
    await InterviewRepository.updateStudentStatus(modifiedList);
  }

  async saveInterview(interview: Interview): Promise<void> {
    const formattedInterview = Interview.formatTimestamp(interview);
    if (!interview.id) {
      await InterviewRepository.insert(formattedInterview);
    } else {
      await InterviewRepository.update(formattedInterview);
    }
  }
}

export default new InterviewService();
