/**
 * connections command group
 * @generated from apis/scm/schema.ts
 */
import type { CommandModule } from 'yargs';
import createpullrequest from './create-pull-request.js';
import delete_ from './delete.js';
import gettoken from './get-token.js';
import list from './list.js';
import listrepos from './list-repos.js';

const command: CommandModule = {
  command: 'connections',
  describe: 'Manage SCM provider connections for linking Git repositories to your Cloudflare account',

  builder: (yargs) => {
    return yargs
      .command(createpullrequest)
      .command(delete_)
      .command(gettoken)
      .command(list)
      .command(listrepos)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
