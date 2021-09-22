const express = require('express');

const taskController = require('../controllers/task')

const router = express.Router();


router.get('/', taskController.getTasks);

router.get('/add-task', taskController.getAddTask);

router.post('/add-task', taskController.postAddTask);

router.get('/edit-task/:taskId', taskController.getEditTask);

router.post('/edit-task/:taskId', taskController.postEditTask);

router.post('/mark-as-completed', taskController.postTaskCompleted);

router.get('/completed-task', taskController.getCompletedTask);

router.post('/mark-as-not-completed', taskController.postTaskNotCompleted);

module.exports = router;