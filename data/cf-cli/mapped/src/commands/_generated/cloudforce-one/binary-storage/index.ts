/**
 * binary-storage command group
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';

const command: CommandModule = {
  command: 'binary-storage',
  describe: 'Upload and retrieve malware samples and suspicious binaries for analysis',

  builder: (yargs) => {
    return yargs.command(create).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
