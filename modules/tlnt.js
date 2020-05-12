const LineStatsLoader = require('./LineStatsLoader')
const Dlink2640Client = require('./Dlink2640Client')
const MiNanoClient = require('./MiNanoClient')





const stats = new LineStatsLoader(new Dlink2640Client({ ip: '192.168.1.1'}))
stats.getStats().then(a => console.log(a)).catch(err => console.log(err))
