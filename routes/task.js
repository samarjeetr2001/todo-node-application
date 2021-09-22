const express = require('express');

const taskController = require('../controllers/task')

const router = express.Router();


router.get('/', taskController.getTasks);

router.get('/add-task', taskController.getAddTask);

router.post('/add-task', taskController.postAddTask);

router.get('/edit-task/:taskId', taskController.getEditTask);

router.post('/edit-task/:taskId', taskController.postEditTask);

router.post('/mask-as-completed', taskController.postTaskCompleted);

module.exports = router;