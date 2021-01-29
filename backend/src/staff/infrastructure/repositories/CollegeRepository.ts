import ICollegeRepository from "../../core/interfaces/ICollegeRepository";
import { course } from "../models";
import { Course } from "../../core/types";

class CollegeRepository implements ICollegeRepository {
  async fetchAllCourses(collegeId: number): Promise<Array<Course>> {
    return (
      await course
        .forge()
        .query((queryBuilder: any) => {
          queryBuilder
            .join("department", "department.id", "=", "course.id")
            .where("department.college", collegeId);
        })
        .fetchAll({ columns: ["course.id", "course.name"] })
    ).toJSON();
  }
}

export default new CollegeRepository();
