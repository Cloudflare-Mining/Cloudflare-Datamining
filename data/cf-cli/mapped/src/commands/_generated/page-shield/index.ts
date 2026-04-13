/**
 * page-shield command
 * @generated from apis/page-shield/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';
import connections from './connections/index.js';
import cookies from './cookies/index.js';
import policies from './policies/index.js';
import scripts from './scripts/index.js';

const command: CommandModule = {
  command: 'page-shield',
  describe:
    'Client-side security — monitor JavaScript, connections, and cookies on your pages for supply-chain attacks',

  builder: (yargs) => {
    return yargs
      .command(get)
      .command(update)
      .command(connections)
      .command(cookies)
      .command(policies)
      .command(scripts)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
