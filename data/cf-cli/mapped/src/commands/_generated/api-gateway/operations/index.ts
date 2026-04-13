/**
 * operations command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkcreate from './bulk-create.js';
import bulkdelete from './bulk-delete.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import schemavalidationedit from './schema-validation-edit.js';
import schemavalidationget from './schema-validation-get.js';
import schemavalidationupdate from './schema-validation-update.js';

const command: CommandModule = {
  command: 'operations',
  describe: 'Registered API operations (method + path) with traffic metrics and schema bindings',

  builder: (yargs) => {
    return yargs
      .command(bulkcreate)
      .command(bulkdelete)
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(schemavalidationedit)
      .command(schemavalidationget)
      .command(schemavalidationupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
