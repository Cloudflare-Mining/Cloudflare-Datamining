/**
 * page-rules command
 * @generated from apis/page-rules/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';
import settings from './settings/index.js';

const command: CommandModule = {
  command: 'page-rules',
  describe:
    'Legacy URL-pattern rules that override zone settings for matching requests — prefer Rules/Transform Rules instead',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(update)
      .command(settings)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
