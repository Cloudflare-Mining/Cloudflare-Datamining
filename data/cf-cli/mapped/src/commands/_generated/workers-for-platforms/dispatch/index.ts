/**
 * dispatch command group
 * @generated from apis/workers-for-platforms/schema.ts
 */
import type { CommandModule } from 'yargs';
import namespacescreate from './namespaces-create.js';
import namespacesdelete from './namespaces-delete.js';
import namespacesget from './namespaces-get.js';
import namespaceslist from './namespaces-list.js';
import namespacesscriptsassetuploadcreate from './namespaces-scripts-asset-upload-create.js';
import namespacesscriptsbindingsget from './namespaces-scripts-bindings-get.js';
import namespacesscriptscontentget from './namespaces-scripts-content-get.js';
import namespacesscriptscontentupdate from './namespaces-scripts-content-update.js';
import namespacesscriptsdelete from './namespaces-scripts-delete.js';
import namespacesscriptsget from './namespaces-scripts-get.js';
import namespacesscriptssecretsdelete from './namespaces-scripts-secrets-delete.js';
import namespacesscriptssecretsget from './namespaces-scripts-secrets-get.js';
import namespacesscriptssecretslist from './namespaces-scripts-secrets-list.js';
import namespacesscriptssecretsupdate from './namespaces-scripts-secrets-update.js';
import namespacesscriptssettingsedit from './namespaces-scripts-settings-edit.js';
import namespacesscriptssettingsget from './namespaces-scripts-settings-get.js';
import namespacesscriptstagsdelete from './namespaces-scripts-tags-delete.js';
import namespacesscriptstagslist from './namespaces-scripts-tags-list.js';
import namespacesscriptstagsupdate from './namespaces-scripts-tags-update.js';
import namespacesscriptsupdate from './namespaces-scripts-update.js';

const command: CommandModule = {
  command: 'dispatch',
  describe: 'Dispatch namespaces isolate customer Workers — manage namespaces, scripts, bindings, secrets, and tags',

  builder: (yargs) => {
    return yargs
      .command(namespacescreate)
      .command(namespacesdelete)
      .command(namespacesget)
      .command(namespaceslist)
      .command(namespacesscriptsassetuploadcreate)
      .command(namespacesscriptsbindingsget)
      .command(namespacesscriptscontentget)
      .command(namespacesscriptscontentupdate)
      .command(namespacesscriptsdelete)
      .command(namespacesscriptsget)
      .command(namespacesscriptssecretsdelete)
      .command(namespacesscriptssecretsget)
      .command(namespacesscriptssecretslist)
      .command(namespacesscriptssecretsupdate)
      .command(namespacesscriptssettingsedit)
      .command(namespacesscriptssettingsget)
      .command(namespacesscriptstagsdelete)
      .command(namespacesscriptstagslist)
      .command(namespacesscriptstagsupdate)
      .command(namespacesscriptsupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
