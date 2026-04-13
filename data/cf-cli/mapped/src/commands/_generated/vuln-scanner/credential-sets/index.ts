/**
 * credential-sets command group
 * @generated from apis/vuln-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import credentialscreate from './credentials-create.js';
import credentialsdelete from './credentials-delete.js';
import credentialsedit from './credentials-edit.js';
import credentialsget from './credentials-get.js';
import credentialslist from './credentials-list.js';
import credentialsupdate from './credentials-update.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'credential-sets',
  describe: 'Credential Sets operations',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(credentialscreate)
      .command(credentialsdelete)
      .command(credentialsedit)
      .command(credentialsget)
      .command(credentialslist)
      .command(credentialsupdate)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
