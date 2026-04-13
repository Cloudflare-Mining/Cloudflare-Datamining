/**
 * dispatch command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import namespacesedit from './namespaces-edit.js';
import namespacesscriptsdelete from './namespaces-scripts-delete.js';
import namespacesscriptslist from './namespaces-scripts-list.js';
import namespacesscriptstagsupdate from './namespaces-scripts-tags-update.js';
import namespacesupdate from './namespaces-update.js';

const command: CommandModule = {
  command: 'dispatch',
  describe: 'Dispatch operations',

  builder: (yargs) => {
    return yargs
      .command(namespacesedit)
      .command(namespacesscriptsdelete)
      .command(namespacesscriptslist)
      .command(namespacesscriptstagsupdate)
      .command(namespacesupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
