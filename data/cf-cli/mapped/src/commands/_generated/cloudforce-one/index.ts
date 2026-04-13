/**
 * cloudforce-one command
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import binarystorage from './binary-storage/index.js';
import events from './events/index.js';
import requests from './requests/index.js';
import requestsextra from './requests-extra/index.js';
import rules from './rules/index.js';
import scans from './scans/index.js';
import threatevents from './threat-events/index.js';

const command: CommandModule = {
  command: 'cloudforce-one',
  describe: 'Threat intelligence platform — request investigations, scan indicators, and track threat events',

  builder: (yargs) => {
    return yargs
      .command(binarystorage)
      .command(events)
      .command(requests)
      .command(requestsextra)
      .command(rules)
      .command(scans)
      .command(threatevents)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
