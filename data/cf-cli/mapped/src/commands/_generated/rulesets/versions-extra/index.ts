/**
 * versions-extra command group
 * @generated from apis/rulesets/schema.ts
 */
import type { CommandModule } from 'yargs';
import bytaglistbytag from './by-tag-list-by-tag.js';
import bytaglistv2 from './by-tag-list-v2.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'versions-extra',
  describe: 'Versions (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(bytaglistbytag)
      .command(bytaglistv2)
      .command(delete_)
      .command(get)
      .command(list)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
