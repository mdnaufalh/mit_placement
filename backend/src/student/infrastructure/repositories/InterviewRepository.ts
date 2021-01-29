import IInterviewRepository from "../../core/interfaces/IInterviewRepository";
import { interview, roundStatus } from "../models";
import { Interview } from "../../core/types";
import * as _ from "lodash";

class InterviewRepository implements IInterviewRepository {
  async applyInterview(studentId: number, interviewId: number): Promise<void> {
    await roundStatus
      .forge({ student: studentId, interview: interviewId, roundNumber: 1 })
      .save();
  }

  async fetchAllInterviews(collegeId: number): Promise<Array<Interview>> {
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
    return interviewList.map((interview: any) =>
      _.omit(interview, ["college"])
    );
  }

  async fetchInterview(interviewId: number): Promise<Interview> {
    return (
      await interview
        .forge()
        .where({ id: interviewId })
        .fetch({ withRelated: ["rounds", "courses"] })
    ).toJSON();
  }
}

export default new InterviewRepository();
