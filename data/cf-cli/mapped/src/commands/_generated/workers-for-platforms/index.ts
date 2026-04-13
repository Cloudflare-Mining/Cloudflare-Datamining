/**
 * workers-for-platforms command
 * @generated from apis/workers-for-platforms/schema.ts
 */
import type { CommandModule } from 'yargs';
import dispatch from './dispatch/index.js';

const command: CommandModule = {
  command: 'workers-for-platforms',
  describe:
    'Workers for Platforms lets you deploy customer Workers into isolated dispatch namespaces for SaaS and multi-tenant use cases',

  builder: (yargs) => {
    return yargs.command(dispatch).demandCommand(1);
  },

  handler: () => {},
};

export default command;
