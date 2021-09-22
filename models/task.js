const path = require('path');
const fs = require('fs');

const filePath = path.join(
    path.dirname(require.main.filename),
    'data',
    'task.json'
);

module.exports = class Task {
    constructor(title, description, imageURL) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.isCompleted = false;
    }

    readTaskFile = (cb) => {
        let tasks = [];
        fs.readFile(p, (err, data) => {
            if (!err) {
                tasks = JSON.parse(data);
            }
            console.log('Task Model: read data completed : ', tasks);
            cb(tasks);
        });
    }

    add(cb) {
        this.id = Math.random().toString().split('.')[1];
        this.readTaskFile(tasks => {
            const updatedTasks = [...tasks];
            updatedTasks.push(this);
            fs.writeFile(p, JSON.stringify(updatedTasks), err => {
                console.log('Error in write task : task model: add : ', err);
            });
            cb();
        });
    }

    update(cb, id) {
        this.id = id;
        this.readTaskFile(tasks => {
            const updatedTasks = [...tasks];
            const taskIndex = updatedTasks.findIndex(_task => _task.id === id);
            updatedTasks[taskIndex] = this;
            fs.writeFile(p, JSON.stringify(updatedTasks), err => {
                console.log('Error in write task : task model: update : ', err);
            });
            cb();
        });
    }

    static getTasks(cb) {
        this.readTaskFile(cb);
    }

    static markAsCompleted(id) {
        this.readTaskFile(tasks => {
            const updatedTasks = [...tasks];
            const taskIndex = updatedTasks.findIndex(_task => _task.id === id);
            updatedTasks[taskIndex].isCompleted = true;
            fs.writeFile(p, JSON.stringify(updatedTasks), err => {
                console.log('Error in mask task as completed : task model:  ', err);
            });
            cb();
        });
    }
}