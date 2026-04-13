/**
 * jobs-extra command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import getjobid from './get-job-id.js';
import getlogpushjobs from './get-logpush-jobs.js';
import update from './update.js';

const command: CommandModule = {
  command: 'jobs-extra',
  describe: 'Jobs (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(getjobid)
      .command(getlogpushjobs)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
