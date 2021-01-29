import InterviewService from "../core/services/InterviewService";

class InterviewController {
  async fetchAllInterviews(req: any, res: any): Promise<void> {
    try {
      res.json(await InterviewService.fetchAllInterviews(req.body.collegeId));
    } catch (e) {
      res.send(e);
    }
  }
  async applyInterview(req: any, res: any): Promise<void> {
    try {
      await InterviewService.applyInterview(
        req.body.studentId,
        req.body.interviewId
      );
      res.end();
    } catch (e) {
      res.send(e);
    }
  }
}

export default new InterviewController();
