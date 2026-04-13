/**
 * apps command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import post from './post.js';

const command: CommandModule = {
  command: 'apps',
  describe: 'Realtime Kit applications that group meetings, sessions, and configuration together',

  builder: (yargs) => {
    return yargs.command(get).command(post).demandCommand(1);
  },

  handler: () => {},
};

export default command;
