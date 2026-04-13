/**
 * assets command group
 * @generated from apis/custom-pages/schema.ts
 */
import type { CommandModule } from 'yargs';
import createcustomasset from './create-custom-asset.js';
import createv2 from './create-v2.js';
import deletecustomasset from './delete-custom-asset.js';
import deletev2 from './delete-v2.js';
import getcustomasset from './get-custom-asset.js';
import getv2 from './get-v2.js';
import listcustomassets from './list-custom-assets.js';
import listv2 from './list-v2.js';
import updatecustomasset from './update-custom-asset.js';
import updatev2 from './update-v2.js';

const command: CommandModule = {
  command: 'assets',
  describe: 'Assets operations',

  builder: (yargs) => {
    return yargs
      .command(createcustomasset)
      .command(createv2)
      .command(deletecustomasset)
      .command(deletev2)
      .command(getcustomasset)
      .command(getv2)
      .command(listcustomassets)
      .command(listv2)
      .command(updatecustomasset)
      .command(updatev2)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
