/**
 * managed-transforms command
 * @generated from apis/managed-transforms/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import edit from './edit.js';
import list from './list.js';

const command: CommandModule = {
  command: 'managed-transforms',
  describe: 'Cloudflare-managed HTTP header transforms — automatically add security headers, remove server info, etc.',

  builder: (yargs) => {
    return yargs.command(delete_).command(edit).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
