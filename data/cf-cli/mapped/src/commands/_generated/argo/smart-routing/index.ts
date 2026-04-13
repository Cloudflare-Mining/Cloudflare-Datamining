/**
 * smart-routing command group
 * @generated from apis/argo/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'smart-routing',
  describe: 'Route traffic through the fastest network paths to your origin using real-time latency data',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
