/**
 * analytics command
 * @generated from apis/analytics/schema.ts
 */
import type { CommandModule } from 'yargs';
import colo from './colo/index.js';
import dashboard from './dashboard/index.js';
import latency from './latency/index.js';

const command: CommandModule = {
  command: 'analytics',
  describe: 'Zone-level traffic analytics — dashboard summaries, per-colo breakdowns, and Argo latency metrics',

  builder: (yargs) => {
    return yargs.command(colo).command(dashboard).command(latency).demandCommand(1);
  },

  handler: () => {},
};

export default command;
