/**
 * urls command group
 * @generated from apis/ai-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'urls',
  describe: "Retrieve the gateway's proxy URL used by clients to send inference requests",

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
