import IStudentRepository from "../../core/interfaces/IStudentRepository";
import { Student } from "../../core/types";
import { student, studentChangeRequest } from "../models";
import * as _ from "lodash";

class StudentRepository implements IStudentRepository {
  async saveChangeRequest(
    changeRequest: Student,
    collegeId: number
  ): Promise<void> {
    const change: any = {
      ..._.pick(changeRequest, [
        "name",
        "sslcPercentage",
        "hscPercentage",
        "ugCgpa",
        "pgCgpa",
        "currentArrears",
        "historyOfArrears",
        "resume",
      ]),
      student: changeRequest.id,
    };
    console.log(change);
    await studentChangeRequest
      .forge()
      .save({ ...change, college: collegeId }, { method: "insert" });
  }

  async fetchStudent(studentId: number): Promise<Student> {
    const fetchedStudent: any = (
      await student
        .forge({ id: studentId })
        .fetch({ withRelated: ["course", "college"] })
    ).toJSON();
    return {
      ...fetchedStudent,
      course: fetchedStudent.course.name,
      college: fetchedStudent.college.name,
    };
  }
}

export default new StudentRepository();
