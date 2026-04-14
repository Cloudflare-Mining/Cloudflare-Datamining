/**
 * log-explorer-query command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import accountsquery from './accounts-query.js';
import zonesquery from './zones-query.js';

const command: CommandModule = {
  command: 'log-explorer-query',
  describe: 'Query log data using the Log Explorer query engine',

  builder: (yargs) => {
    return yargs.command(accountsquery).command(zonesquery).demandCommand(1);
  },

  handler: () => {},
};

export default command;
