import StudentChangeService from "../core/services/StudentChangeService";

class StudentChangeController {
  async fetchStudentChangeRequests(req: any, res: any): Promise<void> {
    if (!req.body.collegeId) {
      res.end("College ID required");
    }
    res.json(await StudentChangeService.fetchRequests(req.body.collegeId));
  }
  async changeRequestStatus(req: any, res: any): Promise<void> {
    if (!req.body.changeRequestList) {
      res.end("Request List Needed");
    }
    await StudentChangeService.changeRequestStatus(
      req.body.changeRequestList,
      req.body.status
    );
    res.end();
  }
}

export default new StudentChangeController();
