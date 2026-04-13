/**
 * custom-nameservers command
 * @generated from apis/custom-nameservers/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import getextra from './get-extra.js';
import update from './update.js';

const command: CommandModule = {
  command: 'custom-nameservers',
  describe: 'Vanity nameservers that use your own domain instead of Cloudflare-assigned NS records',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(getextra).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
