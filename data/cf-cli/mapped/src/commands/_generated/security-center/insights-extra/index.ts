/**
 * insights-extra command group
 * @generated from apis/security-center/schema.ts
 */
import type { CommandModule } from 'yargs';
import classget from './class-get.js';
import contextget from './context-get.js';
import dismissupdate from './dismiss-update.js';
import get from './get.js';
import severityget from './severity-get.js';
import typeget from './type-get.js';

const command: CommandModule = {
  command: 'insights-extra',
  describe: 'Insights (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(classget)
      .command(contextget)
      .command(dismissupdate)
      .command(get)
      .command(severityget)
      .command(typeget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
