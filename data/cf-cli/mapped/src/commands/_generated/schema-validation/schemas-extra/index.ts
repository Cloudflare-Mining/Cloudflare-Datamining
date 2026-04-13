/**
 * schemas-extra command group
 * @generated from apis/schema-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import hostslist from './hosts-list.js';
import operationsget from './operations-get.js';

const command: CommandModule = {
  command: 'schemas-extra',
  describe: 'Schemas (additional) operations',

  builder: (yargs) => {
    return yargs.command(hostslist).command(operationsget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
