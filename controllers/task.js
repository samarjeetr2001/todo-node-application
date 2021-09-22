
exports.getTasks = (req, res, next) => {
    res.send('Tasks Page');
};

exports.getAddTask = (req, res, next) => {
    res.send('Get Add Task Page');
};

exports.postAddTask = (req, res, next) => {
    res.send('Post Add Task Page');
};

exports.getEditTask = (req, res, next) => {
    res.send('Get Edit Task Page');
};

exports.postEditTask = (req, res, next) => {
    res.send('Post Edit Task Page');
};

exports.postTaskCompleted = (req, res, next) => {
    res.send('Post Task completed');
};