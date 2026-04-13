/**
 * pipelines command
 * @generated from apis/pipelines/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import createv1 from './create-v1.js';
import delete_ from './delete.js';
import deletev1 from './delete-v1.js';
import get from './get.js';
import getv1 from './get-v1.js';
import list from './list.js';
import listv1 from './list-v1.js';
import update from './update.js';
import validatesql from './validate-sql.js';
import sinks from './sinks/index.js';
import streams from './streams/index.js';

const command: CommandModule = {
  command: 'pipelines',
  describe: 'Ingest, transform, and route event streams into R2, analytics, or other destinations in real time',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(createv1)
      .command(delete_)
      .command(deletev1)
      .command(get)
      .command(getv1)
      .command(list)
      .command(listv1)
      .command(update)
      .command(validatesql)
      .command(sinks)
      .command(streams)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
