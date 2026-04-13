/**
 * speed command
 * @generated from apis/speed/schema.ts
 */
import type { CommandModule } from 'yargs';
import availabilities from './availabilities/index.js';
import pages from './pages/index.js';
import schedule from './schedule/index.js';

const command: CommandModule = {
  command: 'speed',
  describe: 'Observatory speed tests — run Lighthouse audits, track performance trends, and schedule recurring tests',

  builder: (yargs) => {
    return yargs.command(availabilities).command(pages).command(schedule).demandCommand(1);
  },

  handler: () => {},
};

export default command;
