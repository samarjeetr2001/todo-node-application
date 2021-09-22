const path = require('path');
const fs = require('fs');

const filePath = path.join(
    path.dirname(require.main.filename),
    'data',
    'tasks.json'
);

const readTaskFile = (cb) => {
    let tasks = [];
    fs.readFile(filePath, (err, data) => {
        if (!err) {
            tasks = JSON.parse(data);
        }
        cb(tasks);
    });
}

module.exports = class Task {
    constructor(title, description, imageURL) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.isCompleted = false;
    }

    add(cb) {
        this.id = Math.random().toString().split('.')[1];
        readTaskFile(tasks => {
            const updatedTasks = [...tasks];
            updatedTasks.push(this);
            fs.writeFile(filePath, JSON.stringify(updatedTasks), err => {
                console.log('Error in write task : task model: add : ', err);
            });
            cb();
        });
    }

    update(id, cb) {
        this.id = id;
        readTaskFile(tasks => {
            const updatedTasks = [...tasks];
            const taskIndex = updatedTasks.findIndex(_task => _task.id === id);
            updatedTasks[taskIndex] = this;
            fs.writeFile(filePath, JSON.stringify(updatedTasks), err => {
                console.log('Error in write task : task model: update : ', err);
            });
            cb();
        });
    }

    static getTasks(cb) {
        readTaskFile(cb);
    }

    static getTaskById(id, cb) {
        readTaskFile(tasks => {
            const task = tasks.find(_task => _task.id === id);
            cb(task);
        });
    }

    static markAsCompleted(id, cb) {
        readTaskFile(tasks => {
            const updatedTasks = [...tasks];
            const taskIndex = updatedTasks.findIndex(_task => _task.id === id);
            updatedTasks[taskIndex].isCompleted = !updatedTasks[taskIndex].isCompleted;
            fs.writeFile(filePath, JSON.stringify(updatedTasks), err => {
                console.log('Error in mask task as completed : task model:  ', err);
            });
            cb();
        });
    }
}