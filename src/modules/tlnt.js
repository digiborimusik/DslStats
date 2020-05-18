const LineStatsLoader = require('./LineStatsLoader')
const Dlink2640Client = require('./Dlink2640Client')
const MiNanoClient = require('./MiNanoClient')





const stats = new LineStatsLoader(Dlink2640Client)
export default stats;
// stats.getStats().then(a => console.log(a)).catch(err => console.log(err))
