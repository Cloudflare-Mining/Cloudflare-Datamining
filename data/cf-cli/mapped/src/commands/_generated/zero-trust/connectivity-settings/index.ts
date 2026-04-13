/**
 * connectivity-settings command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'connectivity-settings',
  describe: 'Account-level connectivity defaults for WARP, IPv6, and ICMP proxy behavior',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
