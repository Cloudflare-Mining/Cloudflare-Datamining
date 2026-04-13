/**
 * mitigations command group
 * @generated from apis/abuse-reports/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import review from './review.js';

const command: CommandModule = {
  command: 'mitigations',
  describe: 'Mitigation actions taken in response to abuse reports',

  builder: (yargs) => {
    return yargs.command(list).command(review).demandCommand(1);
  },

  handler: () => {},
};

export default command;
