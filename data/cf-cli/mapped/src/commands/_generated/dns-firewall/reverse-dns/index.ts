/**
 * reverse-dns command group
 * @generated from apis/dns-firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'reverse-dns',
  describe: 'PTR record configuration for reverse DNS lookups on DNS Firewall cluster IPs',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
