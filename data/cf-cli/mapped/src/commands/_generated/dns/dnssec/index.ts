/**
 * dnssec command group
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import listzsks from './list-zsks.js';

const command: CommandModule = {
  command: 'dnssec',
  describe: 'Manage DNSSEC settings for a zone',

  builder: (yargs) => {
    return yargs.command(delete_).command(edit).command(get).command(listzsks).demandCommand(1);
  },

  handler: () => {},
};

export default command;
