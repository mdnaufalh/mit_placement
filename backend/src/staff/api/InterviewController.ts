import InterviewService from "../core/services/InterviewService";

class InterviewController {
  async fetchAllCourses(req: any, res: any) {
    try {
      res.json(await InterviewService.fetchAllCourses(req.body.collegeId));
    } catch (e) {
      res.send(e);
    }
  }

  async fetchAllInterviews(req: any, res: any) {
    try {
      res.json(await InterviewService.fetchAllInterviews(req.body.collegeId));
    } catch (e) {
      res.send(e);
    }
  }

  async fetchRoundList(req: any, res: any) {
    try {
      res.json(
        await InterviewService.fetchRoundList(
          req.body.interviewId,
          req.body.roundNumber
        )
      );
    } catch (e) {
      res.send(e);
    }
  }

  async promoteStudents(req: any, res: any) {
    try {
      await InterviewService.promoteStudents(
        req.body.interviewId,
        req.body.studentList
      );
      res.end();
    } catch (e) {
      res.send(e);
    }
  }

  async demoteStudents(req: any, res: any) {
    try {
      await InterviewService.demoteStudents(
        req.body.interviewId,
        req.body.studentList
      );
      res.end();
    } catch (e) {
      res.send(e);
    }
  }

  async saveInterview(req: any, res: any) {
    try {
      await InterviewService.saveInterview(req.body.interview);
      res.end();
    } catch (e) {
      res.send(e);
    }
  }
}

export default new InterviewController();
