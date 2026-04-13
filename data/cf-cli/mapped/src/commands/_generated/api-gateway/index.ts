/**
 * api-gateway command
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import configurations from './configurations/index.js';
import discovery from './discovery/index.js';
import expressiontemplate from './expression-template/index.js';
import labels from './labels/index.js';
import operations from './operations/index.js';
import operationsextra from './operations-extra/index.js';
import schemas from './schemas/index.js';
import settings from './settings/index.js';
import userschemas from './user-schemas/index.js';

const command: CommandModule = {
  command: 'api-gateway',
  describe: 'Discover, monitor, and protect your API endpoints with schema validation, abuse detection, and routing',

  builder: (yargs) => {
    return yargs
      .command(configurations)
      .command(discovery)
      .command(expressiontemplate)
      .command(labels)
      .command(operations)
      .command(operationsextra)
      .command(schemas)
      .command(settings)
      .command(userschemas)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
