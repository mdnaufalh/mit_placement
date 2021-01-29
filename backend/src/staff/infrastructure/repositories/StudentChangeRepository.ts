import { student, studentChangeRequest } from "../models";
import { knex } from "../models/dbConnection";
import StudentChangeRequest from "../../../../../reactjs/staff/src/common/types/StudentChangeRequest";
import * as _ from "lodash";
import StudentChange from "../../core/types/StudentChange";

class StudentChangeRepository {
  async fetchAll(collegeId: number): Promise<Array<StudentChangeRequest>> {
    const res = (
      await studentChangeRequest
        .forge()
        .where({ college: collegeId, granted: null })
        .fetchAll()
    ).toJSON();
    return Promise.all(
      res.map(async (request: any) => ({
        student: (
          await student.forge({ id: request.student }).fetch()
        ).toJSON(),
        change: _.omit(request, ["placedOn", "granted", "attendedOn"]),
        placedOn: request.placedOn,
        selected: false,
      }))
    );
  }

  async changeRequestStatus(
    requestList: Array<number>,
    status: boolean
  ): Promise<void> {
    await knex("studentChangeRequest")
      .where("id", requestList[0])
      .update({
        granted: status,
        attendedOn: new Date()
          .toJSON()
          .replace("T", " ")
          .replace("Z", "")
          .slice(0, -4),
      });
    if (status) {
      for (const request of requestList) {
        const student: StudentChange = (
          await studentChangeRequest.forge().where({ id: request }).fetch()
        ).toJSON();
        console.log(student);
        await knex("student")
          .where("id", student.student)
          .update(
            _.omit(student, [
              "id",
              "student",
              "placedOn",
              "attendedOn",
              "granted",
            ])
          );
      }
    }
  }
}

export default new StudentChangeRepository();
