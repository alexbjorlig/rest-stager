#!/usr/bin/env node
require('module-alias/register');
import * as program from 'commander';
import * as emoji from 'node-emoji';

// Import the package.json
import * as pjson from '../package.json';

program
    .version((pjson as any).version)
    .arguments('<configFile.yaml>')
    .arguments('[inputParameters]>')
    .action((file, inputParameters) => {
        // const yamlFilePath = file;
        // const configObject = yaml.safeLoad(fs.readFileSync(yamlFilePath, 'utf8'));
        // runRestStagerPipeline(configObject, inputParameters, 'cli-test');
        console.log(emoji.emojify(`Stage some data! :joy:`));
    });

program.on('--help', () => {
    console.log(` --------- `);
    console.log(`Use Rest Stager to move data from REST-APIs to almost anywhere.`);
    console.log(`You just specify the script-file like this:`);
    console.log(`rest-stager <path-to-file>`);
});
program.parse(process.argv);
