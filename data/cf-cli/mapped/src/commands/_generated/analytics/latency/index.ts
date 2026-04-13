/**
 * latency command group
 * @generated from apis/analytics/schema.ts
 */
import type { CommandModule } from 'yargs';
import colosget from './colos-get.js';
import get from './get.js';

const command: CommandModule = {
  command: 'latency',
  describe: 'Argo Smart Routing latency analytics showing time-to-first-byte improvements',

  builder: (yargs) => {
    return yargs.command(colosget).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
