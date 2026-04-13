/**
 * indexes-extra command group
 * @generated from apis/vectorize/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import deletebyidscreate from './delete-by-ids-create.js';
import get from './get.js';
import getbyidscreate from './get-by-ids-create.js';
import insertcreate from './insert-create.js';
import list from './list.js';
import querycreate from './query-create.js';
import update from './update.js';
import upsertcreate from './upsert-create.js';

const command: CommandModule = {
  command: 'indexes-extra',
  describe: 'Indexes (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(deletebyidscreate)
      .command(get)
      .command(getbyidscreate)
      .command(insertcreate)
      .command(list)
      .command(querycreate)
      .command(update)
      .command(upsertcreate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
