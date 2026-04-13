/**
 * annotations command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import outagesget from './outages-get.js';
import outageslocations from './outages-locations.js';

const command: CommandModule = {
  command: 'annotations',
  describe: 'Radar annotations marking significant Internet events (outages, cable cuts, etc.)',

  builder: (yargs) => {
    return yargs.command(list).command(outagesget).command(outageslocations).demandCommand(1);
  },

  handler: () => {},
};

export default command;
