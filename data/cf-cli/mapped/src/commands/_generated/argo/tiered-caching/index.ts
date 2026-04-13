/**
 * tiered-caching command group
 * @generated from apis/argo/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'tiered-caching',
  describe: 'Reduce origin load by having upper-tier data centers serve cache misses before reaching your origin',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
