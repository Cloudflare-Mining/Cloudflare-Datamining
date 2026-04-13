/**
 * operations-extra command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import labelscreatetooperation from './labels-create-to-operation.js';
import labelscreatetooperations from './labels-create-to-operations.js';
import labelsdeletefromoperation from './labels-delete-from-operation.js';
import labelsdeletetooperations from './labels-delete-to-operations.js';
import labelsupdatetooperation from './labels-update-to-operation.js';
import labelsupdatetooperations from './labels-update-to-operations.js';

const command: CommandModule = {
  command: 'operations-extra',
  describe: 'Operations (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(labelscreatetooperation)
      .command(labelscreatetooperations)
      .command(labelsdeletefromoperation)
      .command(labelsdeletetooperations)
      .command(labelsupdatetooperation)
      .command(labelsupdatetooperations)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
