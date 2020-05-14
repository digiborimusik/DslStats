const Telnet = require('./telnetMod')

module.exports = class Client {
    constructor(options) {
        options = options || {};
        this.ip = options.ip ? options.ip : '192.168.1.1';
        this.login = options.login ? options.login : 'admin';
        this.password = options.password ? options.password : 'admin';
        this.prompt = options.prompt ? options.prompt : 'sh';
        this.connection = new Telnet()
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.connection.connect({
                host: this.ip,
                port: 23,
                timeout: 100,
                username: this.login,
                password: this.password
                // removeEcho: 4
            })
                .then((res) => {
                    resolve(res)
                    // this.connection.end()
                })
                .catch(function (error) {
                    reject('cannot connect')
                })

        })
    }
    exec(string) {
        return new Promise((resolve, reject) => {
            this.connection.exec(string)
                .then((res) => {
                    resolve(res)
                })
                .catch(err => {
                    reject('cannot exec')
                })
        })
    }
    close() {
        // this.connection.end()
        this.connection.destroy()
    }
}



