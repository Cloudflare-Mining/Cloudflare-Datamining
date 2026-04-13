/**
 * rules command group
 * @generated from apis/email-routing/schema.ts
 */
import type { CommandModule } from 'yargs';
import catchallsget from './catch-alls-get.js';
import catchallsupdate from './catch-alls-update.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Routing rules that match incoming email addresses and forward to destination mailboxes',

  builder: (yargs) => {
    return yargs
      .command(catchallsget)
      .command(catchallsupdate)
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
