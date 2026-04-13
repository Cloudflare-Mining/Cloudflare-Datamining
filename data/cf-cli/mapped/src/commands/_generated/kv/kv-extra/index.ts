/**
 * kv-extra command group
 * @generated from apis/kv/schema.ts
 */
import type { CommandModule } from 'yargs';
import namespacesbulkdelete from './namespaces-bulk-delete.js';

const command: CommandModule = {
  command: 'kv-extra',
  describe: 'Kv (additional) operations',

  builder: (yargs) => {
    return yargs.command(namespacesbulkdelete).demandCommand(1);
  },

  handler: () => {},
};

export default command;
