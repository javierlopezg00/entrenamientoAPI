const express = require('express');
const router = express.Router();

const userController = require("../../controllers/usersController");

router.get("/", userController.getAllUsers)
.get("/:userId", userController.getOneUser)
.get("/login", userController.login)
.post("/createUser", userController.createUser)
.patch("/:userId", userController.updateUser)
.delete("/:userId", userController.deleteUser)
.get("/login/:user", userController.getuserID)

module.exports = router;
