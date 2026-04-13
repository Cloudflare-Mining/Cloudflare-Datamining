/**
 * verified-bots command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import topbots from './top-bots.js';
import topcategories from './top-categories.js';

const command: CommandModule = {
  command: 'verified-bots',
  describe: 'Catalog of known good bots (Googlebot, Bingbot, etc.) and their traffic patterns',

  builder: (yargs) => {
    return yargs.command(topbots).command(topcategories).demandCommand(1);
  },

  handler: () => {},
};

export default command;
