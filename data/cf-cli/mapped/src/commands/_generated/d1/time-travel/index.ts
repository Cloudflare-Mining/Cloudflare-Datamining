/**
 * time-travel command group
 * @generated from apis/d1/schema.ts
 */
import type { CommandModule } from 'yargs';
import info from './info.js';
import restore from './restore.js';

const command: CommandModule = {
  command: 'time-travel',
  describe: 'use specific point-in-time backups of your D1 database',

  builder: (yargs) => {
    return yargs.command(info).command(restore).demandCommand(1);
  },

  handler: () => {},
};

export default command;
