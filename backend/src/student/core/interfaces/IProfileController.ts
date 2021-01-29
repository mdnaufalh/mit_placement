import { Student } from "../types";

export default interface IProfileController {
  saveChangeRequest(studentId: number, student: Student): Promise<void>;
  fetchProfile(studentId: number): Promise<Student>;
}
