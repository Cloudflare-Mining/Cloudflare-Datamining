/**
 * security-txt command
 * @generated from apis/security-txt/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'security-txt',
  describe: 'Manage the /.well-known/security.txt file that tells security researchers how to report vulnerabilities',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
