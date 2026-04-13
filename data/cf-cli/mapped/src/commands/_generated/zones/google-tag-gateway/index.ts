/**
 * google-tag-gateway command group
 * @generated from apis/zones/schema.ts
 */
import type { CommandModule } from 'yargs';
import configget from './config-get.js';
import configupdate from './config-update.js';

const command: CommandModule = {
  command: 'google-tag-gateway',
  describe: 'Google Tag Gateway operations',

  builder: (yargs) => {
    return yargs.command(configget).command(configupdate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
