/**
 * universal command group
 * @generated from apis/ssl/schema.ts
 */
import type { CommandModule } from 'yargs';
import settingsedit from './settings-edit.js';
import settingsget from './settings-get.js';

const command: CommandModule = {
  command: 'universal',
  describe: 'Universal SSL settings — enable/disable automatic free SSL certificates for the zone',

  builder: (yargs) => {
    return yargs.command(settingsedit).command(settingsget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
