/**
 * traces command group
 * @generated from apis/request-tracers/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'traces',
  describe: 'Simulate request processing to debug rule matches, transforms, and routing decisions',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
