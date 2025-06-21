const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.patch("/:id/complete", taskController.markTaskAsCompleted);
router.patch("/:id", taskController.updateTaskTitle);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
