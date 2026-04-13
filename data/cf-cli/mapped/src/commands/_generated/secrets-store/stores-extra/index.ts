/**
 * stores-extra command group
 * @generated from apis/secrets-store/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import getbyid from './get-by-id.js';
import getv2 from './get-v2.js';
import list from './list.js';
import secretscreate from './secrets-create.js';
import secretsdeletebyid from './secrets-delete-by-id.js';
import secretsdeletesystembulk from './secrets-delete-system-bulk.js';
import secretsduplicatecreate from './secrets-duplicate-create.js';
import secretsedit from './secrets-edit.js';
import secretsget from './secrets-get.js';
import secretslist from './secrets-list.js';

const command: CommandModule = {
  command: 'stores-extra',
  describe: 'Stores (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(getbyid)
      .command(getv2)
      .command(list)
      .command(secretscreate)
      .command(secretsdeletebyid)
      .command(secretsdeletesystembulk)
      .command(secretsduplicatecreate)
      .command(secretsedit)
      .command(secretsget)
      .command(secretslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
