
module.exports = class SimulatedCli {
    constructor() {
        this.status = false;
        this.counter = 0;
        this.snrd = 10;
        this.snru = 10;
        this.attnd = 30;
        this.attnu = 30;
        this.fecd = 0;
        this.fecu = 0;
        this.crcd = 0;
        this.crcu = 0;
    }

    // console.log(Math.random() - 0.49)

    getStats() {
        return new Promise((resolve, reject) => {

            this.snrd += Math.random() - 0.5;
            this.snru += Math.random() - 0.5;

            this.attnd += Math.random() - 0.5;
            this.attnu += Math.random() - 0.5;

            if (Math.random() > 0.9) {
                this.fecd >= 50000 ? this.fecd = 0 : {}
                this.fecd += Math.round(Math.random() * 500)
            }

            if (Math.random() > 0.9) {
                this.fecu >= 50000 ? this.fecd = 0 : {}
                this.fecu += Math.round(Math.random() * 200)
            }

            if (Math.random() > 0.95) {
                this.crcd >= 50000 ? this.fecd = 0 : {}
                this.crcd += Math.round(Math.random() * 200)
            }

            if (Math.random() > 0.95) {
                this.crcu >= 50000 ? this.fecd = 0 : {}
                this.crcu += Math.round(Math.random() * 100)
            }




            let stats = {
                mode:'ADLS2+',
                maxUpSpd: '2455', maxDwSpd: '12412',
                UpSpd: '1445', DwSpd: '10200',
                snrd: Math.round(this.snrd),
                snru: Math.round(this.snru),
                attnd: Math.round(this.attnd),
                attnu: Math.round(this.attnd),
                fecd: this.fecd,
                fecu: this.fecu,
                crcd: this.crcd,
                crcu: this.crcu
            }


            let raw = '/////ENJOY/////'

            let status = 'SIMULATION'

            resolve({ raw, status, stats })
        })
    }
}