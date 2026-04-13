/**
 * settings command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import schemavalidationedit from './schema-validation-edit.js';
import schemavalidationget from './schema-validation-get.js';
import schemavalidationupdate from './schema-validation-update.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Zone-level API Gateway settings including schema validation behavior',

  builder: (yargs) => {
    return yargs
      .command(schemavalidationedit)
      .command(schemavalidationget)
      .command(schemavalidationupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
