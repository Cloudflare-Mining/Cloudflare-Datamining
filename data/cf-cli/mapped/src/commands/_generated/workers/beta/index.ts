/**
 * beta command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import workerscreate from './workers-create.js';
import workersdelete from './workers-delete.js';
import workersedit from './workers-edit.js';
import workersget from './workers-get.js';
import workerslist from './workers-list.js';
import workersupdate from './workers-update.js';
import workersversionscreate from './workers-versions-create.js';
import workersversionsdelete from './workers-versions-delete.js';
import workersversionsget from './workers-versions-get.js';
import workersversionslist from './workers-versions-list.js';

const command: CommandModule = {
  command: 'beta',
  describe: 'Beta Worker lifecycle APIs — create, update, version, and delete Workers (preview channel)',

  builder: (yargs) => {
    return yargs
      .command(workerscreate)
      .command(workersdelete)
      .command(workersedit)
      .command(workersget)
      .command(workerslist)
      .command(workersupdate)
      .command(workersversionscreate)
      .command(workersversionsdelete)
      .command(workersversionsget)
      .command(workersversionslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
