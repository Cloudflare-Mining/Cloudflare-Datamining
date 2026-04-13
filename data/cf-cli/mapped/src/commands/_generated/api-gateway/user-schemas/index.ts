/**
 * user-schemas command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import hostslist from './hosts-list.js';
import list from './list.js';
import operationslist from './operations-list.js';

const command: CommandModule = {
  command: 'user-schemas',
  describe: 'User-uploaded OpenAPI schemas for validating API request and response payloads',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(hostslist)
      .command(list)
      .command(operationslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
