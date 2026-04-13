/**
 * zone-certificates command group
 * @generated from apis/origin-tls-client-auth/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'zone-certificates',
  describe: 'Zone-level client certificates used for authenticated origin pulls across all hostnames',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
