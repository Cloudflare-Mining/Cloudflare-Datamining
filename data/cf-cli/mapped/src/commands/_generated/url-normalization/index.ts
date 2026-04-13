/**
 * url-normalization command
 * @generated from apis/url-normalization/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'url-normalization',
  describe: 'Normalize incoming request URLs to a consistent format before rule evaluation and caching',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
