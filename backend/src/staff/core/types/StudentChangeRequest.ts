import Student from "./Student";
import StudentChange from "./StudentChange";

export default interface StudentChangeRequest {
  student: Student;
  change: StudentChange;
  placedOn: number;
  selected: boolean;
}
