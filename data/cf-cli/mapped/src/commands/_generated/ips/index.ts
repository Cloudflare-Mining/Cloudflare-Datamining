/**
 * ips command
 * @generated from apis/ips/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'ips',
  describe: "List Cloudflare's IP ranges used for proxying traffic — useful for firewall allowlisting",

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
