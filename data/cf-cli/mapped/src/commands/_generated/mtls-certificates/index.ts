/**
 * mtls-certificates command
 * @generated from apis/mtls-certificates/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import associations from './associations/index.js';

const command: CommandModule = {
  command: 'mtls-certificates',
  describe: 'Upload and manage mTLS certificates used by API Shield, Workers, and Gateway for client authentication',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(list).command(associations).demandCommand(1);
  },

  handler: () => {},
};

export default command;
