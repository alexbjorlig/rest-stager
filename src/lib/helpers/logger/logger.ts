import * as moment from 'moment';
import { Logger, LoggerInstance, transports } from 'winston';
import { config } from '@rest-stager-config';

export function tsFormat(): string {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

export const logger: LoggerInstance = new Logger({
    exitOnError: false,
    transports: [
        new transports.Console({
            timestamp: tsFormat,
            level: config.log.level, // 'silly',
            handleExceptions: true,
            prettyPrint: true,
            json: false,
            colorize: true,
        }),
    ]
});
