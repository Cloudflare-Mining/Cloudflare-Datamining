/**
 * schema-validation command
 * @generated from apis/schema-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import schemas from './schemas/index.js';
import schemasextra from './schemas-extra/index.js';
import settings from './settings/index.js';

const command: CommandModule = {
  command: 'schema-validation',
  describe: 'API schema validation settings — enforce request/response schemas and configure validation behavior',

  builder: (yargs) => {
    return yargs.command(schemas).command(schemasextra).command(settings).demandCommand(1);
  },

  handler: () => {},
};

export default command;
