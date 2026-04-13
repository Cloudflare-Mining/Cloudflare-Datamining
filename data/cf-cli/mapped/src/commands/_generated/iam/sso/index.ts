/**
 * sso command group
 * @generated from apis/iam/schema.ts
 */
import type { CommandModule } from 'yargs';
import beginverification from './begin-verification.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'sso',
  describe: 'Configure single sign-on connectors to authenticate account members through an external identity provider',

  builder: (yargs) => {
    return yargs
      .command(beginverification)
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
