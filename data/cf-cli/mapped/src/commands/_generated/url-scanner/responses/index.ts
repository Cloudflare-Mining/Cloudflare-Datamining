/**
 * responses command group
 * @generated from apis/url-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'responses',
  describe: 'Raw HTTP response data captured during URL scans',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
