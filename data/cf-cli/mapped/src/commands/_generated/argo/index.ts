/**
 * argo command
 * @generated from apis/argo/schema.ts
 */
import type { CommandModule } from 'yargs';
import smartrouting from './smart-routing/index.js';
import tieredcaching from './tiered-caching/index.js';

const command: CommandModule = {
  command: 'argo',
  describe: 'Network optimization features that speed up and improve reliability of traffic to your origins',

  builder: (yargs) => {
    return yargs.command(smartrouting).command(tieredcaching).demandCommand(1);
  },

  handler: () => {},
};

export default command;
