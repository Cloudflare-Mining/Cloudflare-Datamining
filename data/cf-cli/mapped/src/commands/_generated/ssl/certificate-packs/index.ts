/**
 * certificate-packs command group
 * @generated from apis/ssl/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import quotaget from './quota-get.js';

const command: CommandModule = {
  command: 'certificate-packs',
  describe: 'Advanced Certificate Manager packs — order, renew, and manage dedicated SSL certificates',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(quotaget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
