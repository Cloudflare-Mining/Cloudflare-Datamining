/**
 * records command group
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import batch from './batch.js';
import create from './create.js';
import delete_ from './delete.js';
import export_ from './export.js';
import get from './get.js';
import import_ from './import.js';
import list from './list.js';
import scan from './scan.js';
import update from './update.js';

const command: CommandModule = {
  command: 'records',
  describe: 'Manage DNS records for a zone',

  builder: (yargs) => {
    return yargs
      .command(batch)
      .command(create)
      .command(delete_)
      .command(export_)
      .command(get)
      .command(import_)
      .command(list)
      .command(scan)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
