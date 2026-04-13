/**
 * namespaces command group
 * @generated from apis/r2-data-catalog/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import tableslist from './tables-list.js';
import tablesmaintenanceconfigsget from './tables-maintenance-configs-get.js';
import tablesmaintenanceconfigsupdate from './tables-maintenance-configs-update.js';

const command: CommandModule = {
  command: 'namespaces',
  describe: 'Logical namespaces that group related tables within the data catalog',

  builder: (yargs) => {
    return yargs
      .command(list)
      .command(tableslist)
      .command(tablesmaintenanceconfigsget)
      .command(tablesmaintenanceconfigsupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
