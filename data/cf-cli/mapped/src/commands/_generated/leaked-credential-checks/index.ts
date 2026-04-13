/**
 * leaked-credential-checks command
 * @generated from apis/leaked-credential-checks/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';
import detections from './detections/index.js';

const command: CommandModule = {
  command: 'leaked-credential-checks',
  describe: 'Detect compromised credentials in login requests by checking against known breach databases',

  builder: (yargs) => {
    return yargs.command(create).command(get).command(detections).demandCommand(1);
  },

  handler: () => {},
};

export default command;
