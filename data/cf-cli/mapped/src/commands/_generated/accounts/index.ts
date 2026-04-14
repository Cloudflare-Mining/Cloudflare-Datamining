/**
 * accounts command
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import createextra from './create-extra.js';
import delete_ from './delete.js';
import get from './get.js';
import getextra from './get-extra.js';
import list from './list.js';
import move from './move.js';
import update from './update.js';
import updateextra from './update-extra.js';
import applications from './applications/index.js';
import categories from './categories/index.js';
import logs from './logs/index.js';
import members from './members/index.js';
import roles from './roles/index.js';
import subscriptions from './subscriptions/index.js';
import tokens from './tokens/index.js';

const command: CommandModule = {
  command: 'accounts',
  describe: 'Account settings, members, roles, subscriptions, and API tokens for your Cloudflare account',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(createextra)
      .command(delete_)
      .command(get)
      .command(getextra)
      .command(list)
      .command(move)
      .command(update)
      .command(updateextra)
      .command(applications)
      .command(categories)
      .command(logs)
      .command(members)
      .command(roles)
      .command(subscriptions)
      .command(tokens)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
