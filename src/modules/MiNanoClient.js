const Client = require('./telnetClient')

module.exports = class MiNanoClient extends Client {
    load() {
        return new Promise((resolve, reject) => {
            // console.log('IS CONNECTION',this.connection)
            this.connect()
                .then(() => { return this.exec('help') })
                .then((response) => {
                    this.close()
                    resolve(response)
                    // console.log('IS CONNECTION',this.connection)
                })
                .catch(err => { reject(err) })
        })
    }
    parse(data) {
        
        const raw = data;
        const status = 'Connected';
        return {raw,status,stats:null}
    }
}