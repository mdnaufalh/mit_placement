import Interview from "../../common/types/Interview";

class InterviewService {
  static API = "http://localhost:7000/student/interview/";
  async fetchAllInterviews(): Promise<Array<Interview>> {
    return InterviewService.fetch("fetch/all/", {});
  }

  async applyInterview(interview: Interview): Promise<void> {
    await InterviewService.fetchVoid("apply/", { interviewId: interview.id });
  }

  static async fetch(url: string, payload: any): Promise<any> {
    try {
      const res = await fetch(InterviewService.API + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId: 1, collegeId: 1 }),
      });
      return res.json();
    } catch (e) {
      alert(e);
    }
  }

  static async fetchVoid(url: string, payload: any): Promise<any> {
    try {
      await fetch(InterviewService.API + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, studentId: 1, collegeId: 1 }),
      });
    } catch (e) {
      alert(e);
    }
  }
}

export default new InterviewService();
