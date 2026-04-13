/**
 * associations command group
 * @generated from apis/mtls-certificates/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'associations',
  describe: 'View which Cloudflare services and hostnames are using a specific mTLS certificate',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
