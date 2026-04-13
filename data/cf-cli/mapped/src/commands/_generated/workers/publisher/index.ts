/**
 * publisher command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import stripecreate from './stripe-create.js';
import stripedelete from './stripe-delete.js';
import stripeget from './stripe-get.js';

const command: CommandModule = {
  command: 'publisher',
  describe: 'Publisher operations',

  builder: (yargs) => {
    return yargs.command(stripecreate).command(stripedelete).command(stripeget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
