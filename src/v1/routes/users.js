const express = require('express');
const router = express.Router();

const userController = require("../../controllers/usersController");

router.get("/", userController.getAllUsers)
.get("/:userId", userController.getOneUser)
.post("/createUser", userController.createUser)
.patch("/:userId", userController.updateUser)
.delete("/:userId", userController.deleteUser)

module.exports = router;
