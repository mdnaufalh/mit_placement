import { Student } from "../types";
import StudentRepository from "../../infrastructure/repositories/StudentRepository";

class ProfileService {
  async saveChangeRequest(student: Student, collegeId: number): Promise<void> {
    await StudentRepository.saveChangeRequest(student, collegeId);
  }
  async fetchProfile(studentId: number): Promise<Student> {
    return StudentRepository.fetchStudent(studentId);
  }
}

export default new ProfileService();
