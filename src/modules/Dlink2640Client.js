const Client = require('./telnetClient')

module.exports = class Dlink2640Client extends Client {
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
        let raw = data;

        let arr = data.split(/\n/)
        arr = arr.map(e => {
            return e.split(/ +/)
        })
    
        let status;

        if (arr[1]) {
            if (arr[1][1]) {
                status = arr[1][1]
            } else {
                status = 'unnown'
            }
        } else {
            status = 'unnown'
        }

        let stats = null

        stats = {
            maxUpSpd:'2455',maxDwSpd:'12412',
            UpSpd:'1445',DwSpd:'10200',
            snrd:Math.round((Math.random() * 3.9 + 9)),snru:Math.round((Math.random() * 5.3 + 9)),
            attnd:50,attnu:34,
            fecd:Math.round((Math.random() * 6.5)),
            fecu:Math.round((Math.random() * 7.5)),
            crcd:Math.round((Math.random() * 3.5)),
            crcu:Math.round((Math.random() * 5.5))
        }

    
        if(status == 'Showtime'){
            stats = {
                maxUpSpd:Number(arr[4][4]),
                maxDwSpd:Number(arr[4][9]),
                UpSpd:Number(arr[5][5]),
                DwSpd:Number(arr[5][10]),
                mode:arr[8][1],
                snrd:Number(arr[14][2]),
                snru:Number(arr[14][3]),
                attnd:Number(arr[15][1]),
                attnu:Number(arr[15][2]),
                fecd:Number(arr[34][1]),
                fecu:Number(arr[34][2]),
                crcd:Number(arr[35][1]),
                crcu:Number(arr[35][2]),
                hecD:Number(arr[38][1]),
                hecU:Number(arr[38][2]),
                ocdD:Number(arr[39][1]),
                ocdU:Number(arr[39][2]),
                lcdD:Number(arr[40][1]),
                lcdU:Number(arr[40][2]),
                esD:Number(arr[46][1]),
                esU:Number(arr[46][2]),
                sesD:Number(arr[47][1]),
                sesU:Number(arr[47][2]),
                uasD:Number(arr[48][1]),
                uasU:Number(arr[48][2])
            }
        }
    
    
    
        return {raw,status,stats}
    }
}