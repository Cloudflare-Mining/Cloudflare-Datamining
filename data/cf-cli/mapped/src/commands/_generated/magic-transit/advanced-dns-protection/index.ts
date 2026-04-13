/**
 * advanced-dns-protection command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import configsdnsprotectionrulescreate from './configs-dns-protection-rules-create.js';
import configsdnsprotectionrulesdeleteforaccount from './configs-dns-protection-rules-delete-for-account.js';
import configsdnsprotectionrulesdeleteprotectionrule from './configs-dns-protection-rules-delete-protection-rule.js';
import configsdnsprotectionrulesget from './configs-dns-protection-rules-get.js';
import configsdnsprotectionruleslist from './configs-dns-protection-rules-list.js';
import configsdnsprotectionrulesupdate from './configs-dns-protection-rules-update.js';

const command: CommandModule = {
  command: 'advanced-dns-protection',
  describe: 'Advanced Dns Protection operations',

  builder: (yargs) => {
    return yargs
      .command(configsdnsprotectionrulescreate)
      .command(configsdnsprotectionrulesdeleteforaccount)
      .command(configsdnsprotectionrulesdeleteprotectionrule)
      .command(configsdnsprotectionrulesget)
      .command(configsdnsprotectionruleslist)
      .command(configsdnsprotectionrulesupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
