/**
 * pages command group
 * @generated from apis/speed/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import testscreate from './tests-create.js';
import testsdelete from './tests-delete.js';
import testsget from './tests-get.js';
import testslist from './tests-list.js';
import trend from './trend.js';

const command: CommandModule = {
  command: 'pages',
  describe: 'Tested pages with their performance history, trends, and individual test results',

  builder: (yargs) => {
    return yargs
      .command(list)
      .command(testscreate)
      .command(testsdelete)
      .command(testsget)
      .command(testslist)
      .command(trend)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
