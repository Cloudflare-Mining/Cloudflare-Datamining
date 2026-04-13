/**
 * recommendations command group
 * @generated from apis/ssl/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'recommendations',
  describe: "Get the recommended SSL/TLS encryption mode based on your origin server's certificate configuration",

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
