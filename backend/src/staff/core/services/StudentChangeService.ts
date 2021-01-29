import StudentChangeRequest from "../types/StudentChangeRequest";
import StudentChangeRepository from "../../infrastructure/repositories/StudentChangeRepository";

class StudentChangeService {
  async fetchRequests(collegeId: number): Promise<Array<StudentChangeRequest>> {
    return StudentChangeRepository.fetchAll(collegeId);
  }

  async changeRequestStatus(
    requestList: Array<number>,
    status: boolean
  ): Promise<void> {
    await StudentChangeRepository.changeRequestStatus(requestList, status);
  }
}

export default new StudentChangeService();
