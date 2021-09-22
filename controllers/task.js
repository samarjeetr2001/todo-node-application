
export function getTasks(req, res, next) {
    res.send('Tasks Page');
}

export function getAddTask(req, res, next) {
    res.send('Get Add Task Page');
}

export function postAddTask(req, res, next) {
    res.send('Post Add Task Page');
}

export function getEditTask(req, res, next) {
    res.send('Get Edit Task Page');
}

export function postEditTask(req, res, next) {
    res.send('Post Edit Task Page');
}

export function postTaskCompleted(req, res, next) {
    res.send('Post Task completed');
}