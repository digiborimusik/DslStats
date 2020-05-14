const Client = require('./telnetClient')

module.exports = class MiNanoClient extends Client {
    load() {
        return new Promise((resolve, reject) => {
            this.connect()
                .then(() => { return this.exec('help') })
                .then((response) => {
                    this.close()
                    resolve(response)
                })
                .catch(err => { reject(err) })
        })
    }
    parse(data) {
        
        return data
    }
}