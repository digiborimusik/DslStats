'use strict'

module.exports = class LineStatsLoader {
    constructor(client) {
        this.client = client
    }

    getStats() {
        return new Promise((resolve,reject) => {
            this.client.load()
            .then(a => {
                // console.log(a)
                return this.client.parse(a)
            })
            .then(a => resolve(a))
            .catch(a => reject(a))
        })
    }
}