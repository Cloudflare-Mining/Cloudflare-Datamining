/**
 * scans command group
 * @generated from apis/vuln-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'scans',
  describe: 'Scans operations',

  builder: (yargs) => {
    return yargs.command(create).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
