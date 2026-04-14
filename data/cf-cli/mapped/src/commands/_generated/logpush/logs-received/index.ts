/**
 * logs-received command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import fieldsget from './fields-get.js';
import list from './list.js';
import rayidget from './rayid-get.js';
import retentionflagcreate from './retention-flag-create.js';
import retentionflagget from './retention-flag-get.js';

const command: CommandModule = {
  command: 'logs-received',
  describe: 'Access raw log data received at the edge — retention flags, ray ID lookups, and field listings',

  builder: (yargs) => {
    return yargs
      .command(fieldsget)
      .command(list)
      .command(rayidget)
      .command(retentionflagcreate)
      .command(retentionflagget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
