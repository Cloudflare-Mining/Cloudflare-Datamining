/**
 * agent-readiness command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import summary from './summary.js';

const command: CommandModule = {
  command: 'agent-readiness',
  describe: 'Agent readiness summary statistics across the Cloudflare network',

  builder: (yargs) => {
    return yargs.command(summary).demandCommand(1);
  },

  handler: () => {},
};

export default command;
