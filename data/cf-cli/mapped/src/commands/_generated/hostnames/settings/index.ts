/**
 * settings command group
 * @generated from apis/hostnames/schema.ts
 */
import type { CommandModule } from 'yargs';
import tlsdelete from './tls-delete.js';
import tlsget from './tls-get.js';
import tlsupdate from './tls-update.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Individual hostname TLS configuration overrides (min TLS version, ciphers, HTTP/2, etc.)',

  builder: (yargs) => {
    return yargs.command(tlsdelete).command(tlsget).command(tlsupdate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
