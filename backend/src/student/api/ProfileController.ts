import ProfileService from "../core/services/ProfileService";

class ProfileController {
  async saveChangeRequest(req: any, res: any): Promise<void> {
    try {
      if (req.body.student.id !== req.body.studentId) {
        throw new Error("Access Denied: Trying to change another student");
      }
      await ProfileService.saveChangeRequest(
        req.body.student,
        res.body.collegeId
      );
      res.end();
    } catch (e) {
      res.send(e);
    }
  }

  async fetchProfile(req: any, res: any): Promise<void> {
    try {
      res.json(await ProfileService.fetchProfile(req.body.studentId));
    } catch (e) {
      res.send(e);
    }
  }
}

export default new ProfileController();
