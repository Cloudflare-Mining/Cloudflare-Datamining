/**
 * prefixes-extra command group
 * @generated from apis/addressing/schema.ts
 */
import type { CommandModule } from 'yargs';
import bgpprefixesdelete from './bgp-prefixes-delete.js';
import validatecreate from './validate-create.js';

const command: CommandModule = {
  command: 'prefixes-extra',
  describe: 'Prefixes (additional) operations',

  builder: (yargs) => {
    return yargs.command(bgpprefixesdelete).command(validatecreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
