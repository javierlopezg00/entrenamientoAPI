const express = require('express');
const router = express.Router();

const userInfoController = require("../../controllers/userInfoController");

router.get("/", userInfoController.getAllUsersInfo);
router.get("/:userId", userInfoController.getOneUserInfo);
router.get("/prediction/:userId", userInfoController.getOnePrediction);
router.post("/createUserInfo", userInfoController.createUserInfo);
//router.put("/:userId", userInfoController.updateUserInfo);
router.put("/updateTrainingPrediction/:userId",userInfoController.updateTrainingPrediction)
router.put("/updateCaloriesPrediction/:userId",userInfoController.updateCaloriesPrediction)
router.delete("/:userId", userInfoController.deleteUserInfo);

module.exports = router;
