/**
 * service-provider-config command group
 * @generated from apis/scim/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'service-provider-config',
  describe: 'Service Provider Config operations',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
