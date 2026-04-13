/**
 * scm command
 * @generated from apis/scm/schema.ts
 */
import type { CommandModule } from 'yargs';
import connections from './connections/index.js';
import grants from './grants/index.js';

const command: CommandModule = {
  command: 'scm',
  describe:
    'Source code management connections — link Git providers, browse repos, create pull requests, and manage grants',

  builder: (yargs) => {
    return yargs.command(connections).command(grants).demandCommand(1);
  },

  handler: () => {},
};

export default command;
