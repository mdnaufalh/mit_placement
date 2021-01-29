import express from "express";
import InterviewController from "../../student/api/InterviewController";
import ProfileController from "./ProfileController";

const router = express.Router();
router.post("/interview/fetch/all/", InterviewController.fetchAllInterviews);
router.post("/interview/apply/", InterviewController.applyInterview);
router.post("/profile/fetch/", ProfileController.fetchProfile);
router.post("/profile/change/", ProfileController.saveChangeRequest);

export default router;
