/**
 * rum command
 * @generated from apis/rum/schema.ts
 */
import type { CommandModule } from 'yargs';
import rules from './rules/index.js';
import siteinfo from './site-info/index.js';

const command: CommandModule = {
  command: 'rum',
  describe: 'Real User Measurement (Web Analytics) — track page loads, Core Web Vitals, and visitor metrics',

  builder: (yargs) => {
    return yargs.command(rules).command(siteinfo).demandCommand(1);
  },

  handler: () => {},
};

export default command;
