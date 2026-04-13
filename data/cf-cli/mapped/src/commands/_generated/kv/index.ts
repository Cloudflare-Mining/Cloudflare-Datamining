/**
 * kv command
 * @generated from apis/kv/schema.ts
 */
import type { CommandModule } from 'yargs';
import kvextra from './kv-extra/index.js';
import namespaces from './namespaces/index.js';

const command: CommandModule = {
  command: 'kv',
  describe: 'Global, low-latency key-value storage for Workers — namespaces, keys, values, and bulk operations',

  builder: (yargs) => {
    return yargs.command(kvextra).command(namespaces).demandCommand(1);
  },

  handler: () => {},
};

export default command;
