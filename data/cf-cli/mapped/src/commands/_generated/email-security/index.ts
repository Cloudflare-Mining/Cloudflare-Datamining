/**
 * email-security command
 * @generated from apis/email-security/schema.ts
 */
import type { CommandModule } from 'yargs';
import investigate from './investigate/index.js';
import phishguard from './phishguard/index.js';
import settings from './settings/index.js';
import settingsextra from './settings-extra/index.js';
import submissions from './submissions/index.js';

const command: CommandModule = {
  command: 'email-security',
  describe: 'Cloud email security (Area 1) — investigate threats, manage allow/block policies, and detect phishing',

  builder: (yargs) => {
    return yargs
      .command(investigate)
      .command(phishguard)
      .command(settings)
      .command(settingsextra)
      .command(submissions)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
