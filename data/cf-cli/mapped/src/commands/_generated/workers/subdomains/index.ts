/**
 * subdomains command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'subdomains',
  describe: 'Configure the workers.dev subdomain used to reach Workers without a custom domain',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
