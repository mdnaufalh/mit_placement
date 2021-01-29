import express from "express";
import InterviewController from "./InterviewController";
import StudentChangeController from "./StudentChangeController";

const router = express.Router();
router.post("/interview/fetch/all/", InterviewController.fetchAllInterviews);
router.post("/interview/student/fetch/", InterviewController.fetchRoundList);
router.post("/interview/courses/", InterviewController.fetchAllCourses);
router.post("/interview/student/promote/", InterviewController.promoteStudents);
router.post("/interview/student/demote/", InterviewController.demoteStudents);
router.post("/interview/save/", InterviewController.saveInterview);
router.post(
  "/student-change/fetch/",
  StudentChangeController.fetchStudentChangeRequests
);
router.post(
  "/student-change/change/",
  StudentChangeController.changeRequestStatus
);

export default router;
