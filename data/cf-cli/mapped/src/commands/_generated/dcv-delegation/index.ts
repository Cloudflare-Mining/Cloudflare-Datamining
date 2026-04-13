/**
 * dcv-delegation command
 * @generated from apis/dcv-delegation/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'dcv-delegation',
  describe:
    'Delegate domain control validation (DCV) to Cloudflare so certificates auto-renew without manual DNS changes',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
