/**
 * v1 command group
 * @generated from apis/images/schema.ts
 */
import type { CommandModule } from 'yargs';
import blobsget from './blobs-get.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import keysdelete from './keys-delete.js';
import keyslist from './keys-list.js';
import keysupdate from './keys-update.js';
import list from './list.js';
import statsget from './stats-get.js';
import variantscreate from './variants-create.js';
import variantsdelete from './variants-delete.js';
import variantsedit from './variants-edit.js';
import variantsget from './variants-get.js';
import variantslist from './variants-list.js';

const command: CommandModule = {
  command: 'v1',
  describe: 'Upload, transform, and serve images with named variants, signing keys, and usage stats',

  builder: (yargs) => {
    return yargs
      .command(blobsget)
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(keysdelete)
      .command(keyslist)
      .command(keysupdate)
      .command(list)
      .command(statsget)
      .command(variantscreate)
      .command(variantsdelete)
      .command(variantsedit)
      .command(variantsget)
      .command(variantslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
