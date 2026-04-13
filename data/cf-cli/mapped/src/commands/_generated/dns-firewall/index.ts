/**
 * dns-firewall command
 * @generated from apis/dns-firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import analytics from './analytics/index.js';
import reversedns from './reverse-dns/index.js';

const command: CommandModule = {
  command: 'dns-firewall',
  describe: 'DNS proxy clusters that filter and forward DNS queries with DDoS protection and caching',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(analytics)
      .command(reversedns)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
