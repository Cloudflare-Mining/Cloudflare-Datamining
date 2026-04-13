/**
 * hostnames command
 * @generated from apis/hostnames/schema.ts
 */
import type { CommandModule } from 'yargs';
import settings from './settings/index.js';
import settingsextra from './settings-extra/index.js';

const command: CommandModule = {
  command: 'hostnames',
  describe: 'Per-hostname TLS settings — minimum TLS version, ciphers, and certificate pinning overrides',

  builder: (yargs) => {
    return yargs.command(settings).command(settingsextra).demandCommand(1);
  },

  handler: () => {},
};

export default command;
