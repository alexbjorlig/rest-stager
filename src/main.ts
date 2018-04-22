#!/usr/bin/env node
require('module-alias/register');
require('nodejs-dashboard');
import * as program from 'commander';
import * as emoji from 'node-emoji';
import chalk from 'chalk';
// Import the package.json
import * as pjson from '../package.json';
import { MainExecution } from './lib/mainExecution';

program
    .version((pjson as any).version)
    .command('stage')
    .arguments('<configFile.yaml>')
    .arguments('[inputParameters]>')
    .action((runConfigPath: string, inputParameters: string | null) => {
        // const yamlFilePath = file;
        // const configObject = yaml.safeLoad(fs.readFileSync(yamlFilePath, 'utf8'));
        // runRestStagerPipeline(configObject, inputParameters, 'cli-test');
        console.log(emoji.emojify(`Starting up! :joy:`));
        const main = MainExecution.getInstance(runConfigPath, inputParameters);
        main.start();
    });

program.on('--help', () => {
    console.log(` --------- `);
    console.log(`Use Rest Stager to move data from REST-APIs to almost anywhere.`);
    console.log(`You just specify the script-file like this:`);
    console.log(`rest-stager <path-to-file>`);
});

if (process.argv.length < 3) {
    console.log(chalk.red(`ERROR `) + `No command given to rest-stager!`);
}

program.parse(process.argv);
