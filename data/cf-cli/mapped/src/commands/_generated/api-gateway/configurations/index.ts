/**
 * configurations command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'configurations',
  describe: 'API Shield configuration — authentication requirements and session identifiers',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
