/**
 * analytics command group
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import bytime from './bytime.js';
import report from './report.js';

const command: CommandModule = {
  command: 'analytics',
  describe: 'DNS analytics and reporting',

  builder: (yargs) => {
    return yargs.command(bytime).command(report).demandCommand(1);
  },

  handler: () => {},
};

export default command;
