import { Variable } from '@rest-stager-interfaces/variable';

/**
 * The purpose of this function is to parse input parameters.
 * Input parameters are strings, and can be used when you use
 * Rest Stager CLI. Maybe you wan't to run the the same config file
 * each day, but with a different variable. Then you can run something like:
 * rest-stager <config-file-full-path> <input-parameters>
 * @export
 * @param {string} inputParameters
 * @returns {Variable[]}
 */
export function parseInputParametersToVariables(inputParametersAsString: string): Variable[]  {
    try {
        if (inputParametersAsString == null || inputParametersAsString.length === 0) {
            return [];
        }
        const splitOnComma: string[] = inputParametersAsString.split(',');
        const returnValue = splitOnComma.map((inputParameter: string) => {
            const split = inputParameter.split('=');
            if (split.length !== 2) {
                throw new Error(`unvalid input parameters. They should be seperated by =, i.e. foo=bar`);
            }
            const variable: Variable = {
                id: split[0],
                value: split[1],
            };
            return variable;
        });
        return returnValue;
    } catch (error) {
        throw new Error(`parseInputParametersToVariables failed unexpected with error: ${error.message}`);
    }
}