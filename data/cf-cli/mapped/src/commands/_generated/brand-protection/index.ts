/**
 * brand-protection command
 * @generated from apis/brand-protection/schema.ts
 */
import type { CommandModule } from 'yargs';
import submit from './submit.js';
import urlinfo from './url-info.js';
import logomatches from './logo-matches/index.js';
import logos from './logos/index.js';
import matches from './matches/index.js';
import queries from './queries/index.js';

const command: CommandModule = {
  command: 'brand-protection',
  describe: 'Monitor the Internet for phishing sites, lookalike domains, and unauthorized use of your brand assets',

  builder: (yargs) => {
    return yargs
      .command(submit)
      .command(urlinfo)
      .command(logomatches)
      .command(logos)
      .command(matches)
      .command(queries)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
