const Task = require('../models/task');


exports.getTasks = (req, res, next) => {
    Task.getTasks(tasks => res.render('index', { pageTitle: 'Home', tasks: tasks }));
};

exports.getAddTask = (req, res, next) => {
    res.render('add-task', { pageTitle: 'Add Task' });
};

exports.postAddTask = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const task = new Task(title, description, imageURL);
    task.add(() => {
        res.redirect('/');
    });
};

exports.getEditTask = (req, res, next) => {
    const editMode = req.query.edit;
    if (editMode) {
        const id = req.params.taskId;
        Task.getTaskById(id, task => {
            if (task) {
                res.render('edit-task', { pageTitle: 'Edit task', task: task });
            } else {
                res.redirect('/');
            }
        });
    } else {
        res.redirect('/');
    }
};

exports.postEditTask = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const task = new Task(title, description, imageURL);
    task.update(id, () => {
        res.redirect('/');
    });
};

exports.postTaskCompleted = (req, res, next) => {
    const id = req.body.id;
    Task.markAsCompleted(id, () => {
        res.redirect('/');
    });
};

exports.postTaskNotCompleted = (req, res, next) => {
    const id = req.body.id;
    Task.markAsCompleted(id, () => {
        res.redirect('/');
    });
};

exports.getCompletedTask = (req, res, next) => {
    Task.getTasks(tasks => res.render('completed-task', { pageTitle: 'Completed Task', tasks: tasks }));
};