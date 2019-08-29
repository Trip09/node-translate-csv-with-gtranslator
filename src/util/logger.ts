/* globals process */
import { LeveledLogMethod, LogMethod, Logger, LoggerInstance, LoggerOptions, transports } from 'winston'

const ENVIRONMENT = process.env.NODE_ENV

export interface LoggerInterface extends LoggerInstance {
    log: LogMethod;
    debug: LeveledLogMethod;
    info: LeveledLogMethod;
    warning: LeveledLogMethod;
    error: LeveledLogMethod;
    crit: LeveledLogMethod;
    emerg: LeveledLogMethod;

}

const options: LoggerOptions = {
    transports: [
        new transports.Console({
            level: ENVIRONMENT === 'production' ? 'error' : 'debug',
        }),
        new transports.File({ filename: 'debug.log', level: 'debug', }),
    ],
}

export const logger = new Logger(options)

if (ENVIRONMENT !== 'production') {
    logger.debug('Logging initialized at debug level')
}

