/**
 * hostname-associations command group
 * @generated from apis/certificate-authorities/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'hostname-associations',
  describe: 'Associate client certificates with hostnames that require mutual TLS verification',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
