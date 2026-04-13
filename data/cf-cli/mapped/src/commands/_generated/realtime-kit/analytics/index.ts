/**
 * analytics command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import getorganalytics from './get-org-analytics.js';

const command: CommandModule = {
  command: 'analytics',
  describe: 'Usage analytics — meeting minutes, participant counts, and bandwidth consumption',

  builder: (yargs) => {
    return yargs.command(getorganalytics).demandCommand(1);
  },

  handler: () => {},
};

export default command;
