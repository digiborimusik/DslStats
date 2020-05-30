'use strict'

module.exports = class LineStatsLoader {
    constructor(Client,options) {
        this.Client = Client;
        this.client_instance;
        this.status = false;
        this.options = options
    }

    getPending(){
        return this.status;
    }

    getStats() {
        return new Promise((resolve, reject) => {
            let client = new this.Client(this.options)
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