/**
 * firewall command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import accessrulesrulescreate from './access-rules-rules-create.js';
import accessrulesrulesdelete from './access-rules-rules-delete.js';
import accessrulesrulesedit from './access-rules-rules-edit.js';
import accessrulesruleslist from './access-rules-rules-list.js';

const command: CommandModule = {
  command: 'firewall',
  describe: 'Firewall operations',

  builder: (yargs) => {
    return yargs
      .command(accessrulesrulescreate)
      .command(accessrulesrulesdelete)
      .command(accessrulesrulesedit)
      .command(accessrulesruleslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
