// import Telnet from './telnetMod';
const Telnet = require('./telnetMod')


class Client {
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
                timeout: 1500,
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
        this.connection.end()
    }
}


class MiNanoClient extends Client {
    load() {
        return new Promise((resolve, reject) => {
            this.connect()
                .then(() => { return this.exec('help') })
                .then((response) => {
                    resolve(response)
                    this.close()
                })
                .catch(err => { reject(err) })
        })
    }
    parse(data) {
        return {
            FEC: 0, HEC: 0, CRC: 0,
            MSNR: 0, ATT: 0,
            Down: 0, Up: 0, MDown: 0, MUp: 0
        }
    }
}

class Dlink2640Client extends Client {
    load() {
        return new Promise((resolve, reject) => {
            this.connect()
                .then(() => { return this.exec(this.prompt) })
                .then(() => { return this.exec('adsl info --show') })
                .then((response) => {
                    resolve(response)
                    this.close()
                })
                .catch(err => { reject(err) })
        })
    }
    parse(data) {
        return {
            FEC: 0, HEC: 0, CRC: 0,
            MSNR: 0, ATT: 0,
            Down: 0, Up: 0, MDown: 0, MUp: 0
        }
    }
}



class LineStatsLoader {
    constructor(client) {
        this.client = client
    }

    getStats() {
        this.client.load()
            .then(a => {
                console.log(a)
                return this.client.parse(a)
            })
            .then(a => console.log(a))
            .catch(a => console.log(a))
    }
}



const stats = new LineStatsLoader(new Dlink2640Client({ ip: '192.168.1.100' }))
stats.getStats()
