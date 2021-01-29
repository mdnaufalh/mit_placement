import Interview from "../../common/types/Interview";
import StudentsChecklistItem from "../../common/types/StudentsChecklistItem";
import Course from "../../common/types/Course";

class InterviewService {
  static API = "http://localhost:7000/staff/";

  async fetchAllInterviews(): Promise<Array<Interview>> {
    return InterviewService.fetch("interview/fetch/all", {});
  }

  async fetchRoundList(
    interviewId: number,
    roundNumber: number
  ): Promise<Array<StudentsChecklistItem>> {
    return InterviewService.fetch("interview/student/fetch/", {
      interviewId,
      roundNumber,
    });
  }

  async promoteStudents(
    interviewId: number,
    studentList: Array<number>
  ): Promise<void> {
    await InterviewService.fetchVoid("interview/student/promote/", {
      interviewId,
      studentList,
    });
  }

  async demoteStudents(
    interviewId: number,
    studentList: Array<number>
  ): Promise<void> {
    await InterviewService.fetchVoid("interview/student/demote/", {
      interviewId,
      studentList,
    });
  }

  async saveInterview(interview: Interview): Promise<void> {
    await InterviewService.fetchVoid("interview/save/", { interview });
  }

  async fetchAllCourses(): Promise<Array<Course>> {
    return InterviewService.fetch("interview/courses/", {});
  }

  static async fetch(url: string, payload: any): Promise<any> {
    const res = await fetch(InterviewService.API + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload, collegeId: 1 }),
    });
    return res.json();
  }

  static async fetchVoid(url: string, payload: any): Promise<void> {
    await fetch(InterviewService.API + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload, collegeId: 1 }),
    });
  }
}

export default new InterviewService();
