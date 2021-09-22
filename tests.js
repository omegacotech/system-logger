const logger = require('./system-logger')

const callback = obj => {
    console.log('CALLBACK OUTPUT:', obj)
}

logger.addStatusCode('sock', 'SOCK', 2, 'MAGENTA')
logger.addStatusCode('match', 'MATCH', 5, 'CYAN')

let date = new Date()
now = date.getTime()

logger.initialize(`FrontEndDriver-${now}`, {
    logLevelFile: 0,
    logLevelCallback: 100,
    logLevelConsole: 0,
    developmentMode: false,
    timezone: 'Asia/Colombo',
    logDirectory: 'logs/',
    callbackLogEvent: callback,
    customBannerHeaders: 'This is a custom banner'
})

logger.info("This is an information");
logger.warn("This is a warning");
logger.crit("This is a critical message");
logger.debug('Wassup', {eyes: 2, feet: 2, hands: 2, eyeColor: 'blue'});
logger.info('Wassup', {eyes: 2, feet: 2, hands: 2, eyeColor: 'blue'});
logger.warn('Wassup', {eyes: 2, feet: 2, hands: 2, eyeColor: 'blue'});
logger.crit('Wassup', {eyes: 2, feet: 2, hands: 2, eyeColor: 'blue'});
