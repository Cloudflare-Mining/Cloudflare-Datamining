/**
 * domains command group
 * @generated from apis/registrar/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'domains',
  describe: 'Registered domains — view details, update contacts, and configure auto-renewal and WHOIS privacy',

  builder: (yargs) => {
    return yargs.command(get).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
