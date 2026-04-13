/**
 * access-rules command group
 * @generated from apis/firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'access-rules',
  describe: 'IP-based access rules that allow, block, challenge, or whitelist traffic globally or per-zone',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
