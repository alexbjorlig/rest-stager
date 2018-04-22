import { PerformanceMonitor } from './helpers/performance-monitor/performance-monitor';
import { Variable } from '@rest-stager-interfaces/variable';
import { logger } from '@rest-stager';
import { parseInputParametersToVariables } from './parsers/parseInputParametersToVariables';

/**
 * The purpose of this class it so control the main execution.
 * When the YAML configuration file is read into memory, it lives on
 * this class, and variables etc. will be controlled here. This class
 * will also control start and end of execution.
 * @export
 * @class MainExecution
 */
export class MainExecution  {
    private static instance: MainExecution;
    private performanceMonitor: PerformanceMonitor;
    private inputParametersAsVariables: Variable[];
    public static getInstance(runConfigPath: string, rawInputParameters: string | null): MainExecution {
        if (!MainExecution.instance) {
            MainExecution.instance = new MainExecution(runConfigPath, rawInputParameters);
        }
        return MainExecution.instance;
    }
    private constructor(runConfigPath: string, rawInputParameters: string | null)  {
        this.performanceMonitor = new PerformanceMonitor();
        // Read the raw input Paramters and save them on this class, so they can be used later!
        this.inputParametersAsVariables = parseInputParametersToVariables(rawInputParameters);
        console.log(this.inputParametersAsVariables);
    }

    public start() {
        logger.info(`Rest Stager is now starting up!`);
    }

    public endExecution(error?: Error) {
        this.performanceMonitor.end();
        logger.info(`Rest stager is done - over and out!`);
        process.exit();
    }
}
