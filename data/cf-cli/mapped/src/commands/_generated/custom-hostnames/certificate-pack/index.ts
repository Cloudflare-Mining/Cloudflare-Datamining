/**
 * certificate-pack command group
 * @generated from apis/custom-hostnames/schema.ts
 */
import type { CommandModule } from 'yargs';
import certificatesdelete from './certificates-delete.js';
import certificatesupdate from './certificates-update.js';

const command: CommandModule = {
  command: 'certificate-pack',
  describe: 'SSL certificates attached to individual custom hostnames',

  builder: (yargs) => {
    return yargs.command(certificatesdelete).command(certificatesupdate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
