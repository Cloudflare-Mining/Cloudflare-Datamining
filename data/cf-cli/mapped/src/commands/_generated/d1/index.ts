/**
 * d1 command
 * @generated from apis/d1/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import execute from './execute.js';
import export_ from './export.js';
import info from './info.js';
import list from './list.js';
import database from './database/index.js';
import migrations from './migrations/index.js';
import timetravel from './time-travel/index.js';

const command: CommandModule = {
  command: 'd1',
  describe:
    "D1 is Cloudflare's managed, serverless database with SQLite's SQL semantics, built-in disaster recovery, and Worker and HTTP API access.",

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(execute)
      .command(export_)
      .command(info)
      .command(list)
      .command(database)
      .command(migrations)
      .command(timetravel)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
