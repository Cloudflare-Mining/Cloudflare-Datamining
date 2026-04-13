/**
 * ownership command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import validate from './validate.js';

const command: CommandModule = {
  command: 'ownership',
  describe: 'Prove ownership of a destination bucket before Cloudflare can push logs to it',

  builder: (yargs) => {
    return yargs.command(create).command(validate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
