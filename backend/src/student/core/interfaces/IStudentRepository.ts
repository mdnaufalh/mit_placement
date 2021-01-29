import { Student } from "../types";

export default interface IStudentRepository {
  saveChangeRequest(student: Student, collegeId: number): Promise<void>;
  fetchStudent(studentId: number): Promise<Student>;
}
