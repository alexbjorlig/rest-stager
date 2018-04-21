

/**
 * The purpose of this class it so control the main execution.
 * When the YAML configuration file is read into memory, it lives on
 * this class, and variables etc. will be controlled here. This class
 * will also control start and end of execution.
 * @export
 * @class MainExecution
 */
export class MainExecution {
    // public static getInstance(runConfig?, userid?, inputParams?, flowKey?) {
    //     if (!ExecutionLogic.instance) {
    //         ExecutionLogic.instance = new ExecutionLogic(runConfig, userid, inputParams, flowKey);
    //     }
    //     return ExecutionLogic.instance; // ExecutionLogic.instance;
    // }
    // private static instance: MainExecution;
    // private runConfig: any;
    private inputParameters: string[];

    private constructor(runConfig: any, rawInputParameters?: string) {
        this.runConfig = runConfig;
        // if (inputParams) {
        //     // this.InputParameters = JSON.parse(inputParams);
        //     this.inputParameters = this.parseInputParameters(inputParams);
        // }
        // const executionId = generate();
        // logger.info(`follow the execution at http://localhost:4200/report/${executionId}`);
        // this.nokia = Nokia.getInstance(executionId);
        // this.bigBrother = new BigBrother(runConfig.meta, userid, flowKey, executionId);
    }
}
