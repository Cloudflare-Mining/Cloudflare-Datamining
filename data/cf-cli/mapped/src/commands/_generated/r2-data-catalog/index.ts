/**
 * r2-data-catalog command
 * @generated from apis/r2-data-catalog/schema.ts
 */
import type { CommandModule } from 'yargs';
import disable from './disable.js';
import enable from './enable.js';
import get from './get.js';
import list from './list.js';
import credentials from './credentials/index.js';
import maintenanceconfigs from './maintenance-configs/index.js';
import namespaces from './namespaces/index.js';

const command: CommandModule = {
  command: 'r2-data-catalog',
  describe:
    'Iceberg-compatible data catalog for R2 — organize objects into tables and namespaces for SQL query engines',

  builder: (yargs) => {
    return yargs
      .command(disable)
      .command(enable)
      .command(get)
      .command(list)
      .command(credentials)
      .command(maintenanceconfigs)
      .command(namespaces)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
