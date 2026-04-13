/**
 * widgets command group
 * @generated from apis/turnstile/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import rotatesecret from './rotate-secret.js';
import update from './update.js';

const command: CommandModule = {
  command: 'widgets',
  describe: 'Turnstile widget configurations — site keys, secret rotation, and challenge mode settings',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(rotatesecret)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
