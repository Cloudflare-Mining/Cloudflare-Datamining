/**
 * cache command
 * @generated from apis/cache/schema.ts
 */
import type { CommandModule } from 'yargs';
import purge from './purge.js';
import cachereserve from './cache-reserve/index.js';
import regionaltieredcache from './regional-tiered-cache/index.js';
import smarttieredcache from './smart-tiered-cache/index.js';
import variants from './variants/index.js';

const command: CommandModule = {
  command: 'cache',
  describe: 'Purge cached content and configure Cache Reserve, tiered caching, and variant serving',

  builder: (yargs) => {
    return yargs
      .command(purge)
      .command(cachereserve)
      .command(regionaltieredcache)
      .command(smarttieredcache)
      .command(variants)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
