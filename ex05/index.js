const { EventEmitter } = require('events')
module.exports = class Connection {
    // 暗号：冒泡排序
    constructor() {
        this.emmiter = new EventEmitter();
    }
    connection(msg) {
        // 触发 监听的connection事件
        this.emmiter.emit('connection', msg)
    }
    onConn(cb) {
        // 监听connection
        this.emmiter.on('connection', cb)
    }
}
