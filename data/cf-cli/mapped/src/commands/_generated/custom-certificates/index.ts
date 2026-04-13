/**
 * custom-certificates command
 * @generated from apis/custom-certificates/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import prioritize from './prioritize/index.js';

const command: CommandModule = {
  command: 'custom-certificates',
  describe: 'Upload and manage your own SSL/TLS certificates for a zone, with priority ordering',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(prioritize)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
