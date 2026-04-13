/**
 * certificate-authorities command
 * @generated from apis/certificate-authorities/schema.ts
 */
import type { CommandModule } from 'yargs';
import hostnameassociations from './hostname-associations/index.js';

const command: CommandModule = {
  command: 'certificate-authorities',
  describe: 'Map client certificates to specific hostnames for mTLS authentication',

  builder: (yargs) => {
    return yargs.command(hostnameassociations).demandCommand(1);
  },

  handler: () => {},
};

export default command;
