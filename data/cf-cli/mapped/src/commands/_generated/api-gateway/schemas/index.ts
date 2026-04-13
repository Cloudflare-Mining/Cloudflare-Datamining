/**
 * schemas command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'schemas',
  describe: 'OpenAPI schemas learned from traffic for API endpoint validation',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
