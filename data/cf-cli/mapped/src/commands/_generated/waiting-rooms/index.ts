/**
 * waiting-rooms command
 * @generated from apis/waiting-rooms/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import listextra from './list-extra.js';
import update from './update.js';
import events from './events/index.js';
import page from './page/index.js';
import rules from './rules/index.js';
import settings from './settings/index.js';
import statuses from './statuses/index.js';

const command: CommandModule = {
  command: 'waiting-rooms',
  describe: 'Virtual queues that throttle traffic to your site during peak demand with customizable waiting pages',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(listextra)
      .command(update)
      .command(events)
      .command(page)
      .command(rules)
      .command(settings)
      .command(statuses)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
