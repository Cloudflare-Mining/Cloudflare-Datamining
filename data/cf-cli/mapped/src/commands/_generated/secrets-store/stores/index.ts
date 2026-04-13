/**
 * stores command group
 * @generated from apis/secrets-store/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import list from './list.js';
import secretsbulkdelete from './secrets-bulk-delete.js';
import secretscreate from './secrets-create.js';
import secretsdelete from './secrets-delete.js';
import secretsduplicate from './secrets-duplicate.js';
import secretsedit from './secrets-edit.js';
import secretsget from './secrets-get.js';
import secretslist from './secrets-list.js';

const command: CommandModule = {
  command: 'stores',
  describe: 'Secret stores that hold encrypted key-value secrets accessible by Workers and services',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(list)
      .command(secretsbulkdelete)
      .command(secretscreate)
      .command(secretsdelete)
      .command(secretsduplicate)
      .command(secretsedit)
      .command(secretsget)
      .command(secretslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
