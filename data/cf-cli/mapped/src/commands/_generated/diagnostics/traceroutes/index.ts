/**
 * traceroutes command group
 * @generated from apis/diagnostics/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'traceroutes',
  describe: 'Run traceroutes from Cloudflare data centers to diagnose network path issues',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
