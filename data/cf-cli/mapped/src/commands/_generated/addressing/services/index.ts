/**
 * services command group
 * @generated from apis/addressing/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'services',
  describe: 'Cloudflare services (CDN, Spectrum, Magic Transit) that IP prefixes can be bound to',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
