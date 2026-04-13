/**
 * total-tls command group
 * @generated from apis/acm/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'total-tls',
  describe: 'Automatically issue certificates for all hostnames and subdomains in your zone',

  builder: (yargs) => {
    return yargs.command(edit).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
