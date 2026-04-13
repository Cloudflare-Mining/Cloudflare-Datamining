/**
 * phishguard command group
 * @generated from apis/email-security/schema.ts
 */
import type { CommandModule } from 'yargs';
import reportslist from './reports-list.js';

const command: CommandModule = {
  command: 'phishguard',
  describe: 'PhishGuard user-reported phishing submissions and analysis reports',

  builder: (yargs) => {
    return yargs.command(reportslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
