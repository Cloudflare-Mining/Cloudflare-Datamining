/**
 * access-rules-extra command group
 * @generated from apis/firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import rulescreate from './rules-create.js';
import rulesdelete from './rules-delete.js';
import rulesedit from './rules-edit.js';
import ruleslist from './rules-list.js';

const command: CommandModule = {
  command: 'access-rules-extra',
  describe: 'Access Rules (additional) operations',

  builder: (yargs) => {
    return yargs.command(rulescreate).command(rulesdelete).command(rulesedit).command(ruleslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
