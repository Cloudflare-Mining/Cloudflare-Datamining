/**
 * discovery command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import operationsbulkedit from './operations-bulk-edit.js';
import operationsedit from './operations-edit.js';
import operationslist from './operations-list.js';

const command: CommandModule = {
  command: 'discovery',
  describe: 'Auto-discovered API endpoints from traffic analysis with schema inference',

  builder: (yargs) => {
    return yargs
      .command(get)
      .command(operationsbulkedit)
      .command(operationsedit)
      .command(operationslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
