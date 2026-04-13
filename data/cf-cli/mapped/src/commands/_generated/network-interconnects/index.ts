/**
 * network-interconnects command
 * @generated from apis/network-interconnects/schema.ts
 */
import type { CommandModule } from 'yargs';
import cnis from './cnis/index.js';
import interconnects from './interconnects/index.js';
import settings from './settings/index.js';
import slots from './slots/index.js';

const command: CommandModule = {
  command: 'network-interconnects',
  describe: "Physical and virtual private interconnects between your infrastructure and Cloudflare's network",

  builder: (yargs) => {
    return yargs.command(cnis).command(interconnects).command(settings).command(slots).demandCommand(1);
  },

  handler: () => {},
};

export default command;
