/**
 * live-inputs command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import outputscreate from './outputs-create.js';
import outputsdelete from './outputs-delete.js';
import outputslist from './outputs-list.js';
import outputsupdate from './outputs-update.js';
import update from './update.js';

const command: CommandModule = {
  command: 'live-inputs',
  describe: 'RTMPS/SRT ingest endpoints for live streaming, including multi-output simulcasting',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(outputscreate)
      .command(outputsdelete)
      .command(outputslist)
      .command(outputsupdate)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
