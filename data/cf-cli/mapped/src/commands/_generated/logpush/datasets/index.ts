/**
 * datasets command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import fieldsget from './fields-get.js';
import jobsget from './jobs-get.js';

const command: CommandModule = {
  command: 'datasets',
  describe: 'Available log datasets and their fields — HTTP requests, firewall events, DNS queries, etc.',

  builder: (yargs) => {
    return yargs.command(fieldsget).command(jobsget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
