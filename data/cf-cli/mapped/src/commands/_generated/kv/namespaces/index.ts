/**
 * namespaces command group
 * @generated from apis/kv/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkdelete from './bulk-delete.js';
import bulkget from './bulk-get.js';
import bulkupdate from './bulk-update.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import keysbulkdelete from './keys-bulk-delete.js';
import keysbulkget from './keys-bulk-get.js';
import keysbulkupdate from './keys-bulk-update.js';
import keyslist from './keys-list.js';
import list from './list.js';
import metadataget from './metadata-get.js';
import update from './update.js';
import valuesdelete from './values-delete.js';
import valuesget from './values-get.js';
import valuesupdate from './values-update.js';

const command: CommandModule = {
  command: 'namespaces',
  describe:
    'KV namespaces and their key-value pairs — create namespaces, read/write individual or bulk entries, and inspect metadata',

  builder: (yargs) => {
    return yargs
      .command(bulkdelete)
      .command(bulkget)
      .command(bulkupdate)
      .command(create)
      .command(delete_)
      .command(get)
      .command(keysbulkdelete)
      .command(keysbulkget)
      .command(keysbulkupdate)
      .command(keyslist)
      .command(list)
      .command(metadataget)
      .command(update)
      .command(valuesdelete)
      .command(valuesget)
      .command(valuesupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
