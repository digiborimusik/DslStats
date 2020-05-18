'use strict'

module.exports = class LineStatsLoader {
    constructor(Client) {
        this.Client = Client;
        this.client_instance;
        this.status = false;
    }

    getPending(){
        return this.status;
    }

    getStats() {
        return new Promise((resolve, reject) => {
            let client = new this.Client({ ip: '192.168.1.1'})
            this.status = true
            client.load()
                .then(a => {
                    // console.log(a)
                    return client.parse(a)
                })
                .then(a => {
                    resolve(a)
                    this.status = false
                })
                .catch(a => {
                    reject(a)
                    this.status = false
                })
        })
    }
}