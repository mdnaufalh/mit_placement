import Course from "../types/Course";

export default interface ICollegeRepository {
  fetchAllCourses(collegeId: number): Promise<Array<Course>>;
}
