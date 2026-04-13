/**
 * scan command group
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import reviewcreate from './review-create.js';
import reviewget from './review-get.js';
import triggercreate from './trigger-create.js';

const command: CommandModule = {
  command: 'scan',
  describe: 'Scan operations',

  builder: (yargs) => {
    return yargs.command(reviewcreate).command(reviewget).command(triggercreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
