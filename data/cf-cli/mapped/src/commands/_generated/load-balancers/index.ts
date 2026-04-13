/**
 * load-balancers command
 * @generated from apis/load-balancers/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';
import monitorgroups from './monitor-groups/index.js';
import monitorgroupsextra from './monitor-groups-extra/index.js';
import monitors from './monitors/index.js';
import pools from './pools/index.js';
import previews from './previews/index.js';
import regions from './regions/index.js';
import searches from './searches/index.js';

const command: CommandModule = {
  command: 'load-balancers',
  describe: 'Distribute traffic across origin pools with health monitoring, geo-steering, and failover',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(update)
      .command(monitorgroups)
      .command(monitorgroupsextra)
      .command(monitors)
      .command(pools)
      .command(previews)
      .command(regions)
      .command(searches)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
