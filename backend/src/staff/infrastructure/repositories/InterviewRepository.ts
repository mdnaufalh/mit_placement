import IInterviewRepository from "../../core/interfaces/IInterviewRepository";
import {
  Interview,
  Round,
  RoundMap,
  StudentsChecklistItem,
} from "../../core/types";
import { interview, round, roundStatus } from "../models";
import * as _ from "lodash";
import StudentRepository from "../../../student/infrastructure/repositories/StudentRepository";

class InterviewRepository implements IInterviewRepository {
  async fetchAll(collegeId: number): Promise<Array<Interview>> {
    const interviewList: Array<any> = (
      await interview
        .forge()
        .where({ college: collegeId })
        .fetchAll({ withRelated: ["rounds", "courses"] })
    )
      .toJSON()
      .map((interviewItem: any) => ({
        ...interviewItem,
        applicationDeadline: Date.parse(interviewItem.applicationDeadline),
        courses: interviewItem.courses.map((course: any) =>
          _.pick(course, ["id", "name"])
        ),
        rounds: interviewItem.rounds
          .map((round: any) => _.omit(round, ["interview", "appliable"]))
          .map((round: any) => ({
            ...round,
            timestamp: Date.parse(round.timestamp),
          })),
      }));
    // @ts-ignore
    return interviewList.map((interview: any) =>
      _.omit(interview, ["college"])
    );
  }

  async fetchRoundList(
    interviewId: number,
    roundNumber: number
  ): Promise<Array<StudentsChecklistItem>> {
    return (
      await Promise.all(
        (
          await roundStatus
            .forge()
            .where({
              interview: interviewId,
              roundNumber: roundNumber,
            })
            .fetchAll()
        )
          .toJSON()
          .map(async (student: any) => ({
            id: student.student,
            student: await StudentRepository.fetchStudent(student.student),
          }))
      )
    ).map((student: any) => ({
      id: student.id,
      name: student.student.name,
      registerNumber: student.student.registerNumber,
      checked: false,
    }));
  }

  async fetchStudentsStatus(
    interviewId: number,
    studentList: Array<number>
  ): Promise<Array<RoundMap>> {
    return (
      await roundStatus
        .forge()
        .where({ interview: interviewId })
        .where("student", "in", studentList)
        .fetchAll()
    ).toJSON();
  }

  async insert(newInterview: Interview): Promise<void> {
    interview
      .forge()
      .save(_.omit(newInterview, ["courses", "rounds"]))
      .then(async (res: any) => res.courses().attach(newInterview.courses))
      .then(async (res: any) => res.rounds().attach(newInterview.rounds));
  }

  async update(modifiedInterview: Interview): Promise<void> {
    console.log(modifiedInterview);
    await interview
      .forge()
      .save(_.omit(modifiedInterview, ["courses", "rounds"]), {
        method: "update",
      })
      .then(async (res: any) => {
        res.courses().detach();
        res.courses().attach(modifiedInterview.courses);
      });
    try {
      await round
        .forge()
        .where({ interview: modifiedInterview.id })
        .destroy()
        .save();
    } catch (e) {}
    modifiedInterview.rounds.forEach((currentRound: Round) => {
      round.forge({ ...currentRound, interview: modifiedInterview.id }).save();
    });
  }

  async updateStudentStatus(modifiedList: Array<RoundMap>): Promise<void> {
    modifiedList.forEach((entry: RoundMap) => {
      roundStatus
        .forge()
        .where({ interview: entry.interview, student: entry.student })
        .save(entry, { method: "update" });
    });
  }
}

export default new InterviewRepository();
