/**
 * instances command group
 * @generated from apis/ai-search/schema.ts
 */
import type { CommandModule } from 'yargs';
import chatcompletions from './chat-completions.js';
import create from './create.js';
import delete_ from './delete.js';
import jobscreate from './jobs-create.js';
import jobsget from './jobs-get.js';
import jobslist from './jobs-list.js';
import jobslogs from './jobs-logs.js';
import list from './list.js';
import read from './read.js';
import search from './search.js';
import stats from './stats.js';
import update from './update.js';

const command: CommandModule = {
  command: 'instances',
  describe: 'Search instances that hold indexed content — create, query, manage items, and run ingestion jobs',

  builder: (yargs) => {
    return yargs
      .command(chatcompletions)
      .command(create)
      .command(delete_)
      .command(jobscreate)
      .command(jobsget)
      .command(jobslist)
      .command(jobslogs)
      .command(list)
      .command(read)
      .command(search)
      .command(stats)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
