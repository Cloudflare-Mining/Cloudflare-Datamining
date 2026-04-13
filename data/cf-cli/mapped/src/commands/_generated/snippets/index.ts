/**
 * snippets command
 * @generated from apis/snippets/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';
import content from './content/index.js';
import rules from './rules/index.js';

const command: CommandModule = {
  command: 'snippets',
  describe:
    'Lightweight JavaScript snippets that run on requests before Workers — for quick header modifications and redirects',

  builder: (yargs) => {
    return yargs
      .command(delete_)
      .command(get)
      .command(list)
      .command(update)
      .command(content)
      .command(rules)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
